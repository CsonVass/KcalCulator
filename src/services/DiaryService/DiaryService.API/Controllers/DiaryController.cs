using DiaryService.BL;
using DiaryService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

[ApiController]
[Route("api/diaries")]
public class DiaryController : ControllerBase
{
    private readonly DiaryManager diaryManager;

    public DiaryController(DiaryManager _dm) => this.diaryManager = _dm;

    //GET

    [HttpGet]
    [ProducesResponseType(typeof(List<Diary>), (int)HttpStatusCode.OK)]
    public async Task<ActionResult<List<Diary>>> GetDiaries()
    {
        List<Diary> result = new List<Diary>(await diaryManager.GetDiaries());

        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);

    }


    [HttpGet("{userid}")]
    [ProducesResponseType(typeof(List<Diary>), (int)HttpStatusCode.OK)]
    public async Task<ActionResult<Diary>> GetDiary(string userid)
    {
        Diary result = await diaryManager.GetDiary(userid);

        if (result == null)
        {
            return NotFound(new Diary());
        }

        return Ok(result);

    }

    [HttpGet("{userid}/{date}")]
    [ProducesResponseType(typeof(DailyRecordsDTO), (int)HttpStatusCode.OK)]
    public async Task<ActionResult<DailyRecordsDTO>> GetDiaryByDate(string userid, string date)
    {
        DailyRecordsDTO result = await diaryManager.GetDailyRecords(userid, date);

        if(result == null)
        {
            return NotFound(new DailyRecordsDTO { Date=date, Records=new List<Record>()});
        }
        return Ok(result);
    }

    //POST

    [HttpPost("{userid}")]
    [ProducesResponseType(typeof(DiaryDTO), (int)HttpStatusCode.Created)]
    public async Task<ActionResult<DiaryDTO>> PostDiary(string userid, [FromBody] Nutrients goals)
    {
        if(userid == null)
        {
            return BadRequest();
        }

        if(goals == null)
        {
            goals = new Nutrients();
        }
        
        bool result = await diaryManager.CreateDiary(userid, goals);
        if (!result)
        {
            return Conflict();
        }

        return Ok(await diaryManager.GetDiary(userid));
    }

    [HttpPost("{userid}/dailyrecords/{date}")]
    [ProducesResponseType(typeof(RecordUpdateDTO), (int)HttpStatusCode.Created)]
    public async Task<ActionResult<RecordUpdateDTO>> PostRecord(string userid, string date, [FromBody] RecordCreateDTO record)
    {
        if (userid == null || date == null || record == null)
        {
            return BadRequest();
        }

        bool result = await diaryManager.CreateRecord(record);
        if (!result)
        {
            return Conflict();
        }

        return Ok(await diaryManager.GetDailyRecords(userid, date));
    }

    //PUT
    [HttpPut("{userid}")]
    [ProducesResponseType(typeof(DiaryDTO), (int)HttpStatusCode.OK)]
    public async Task<ActionResult<DiaryDTO>> PutDiary(string userid, [FromBody] Nutrients goals)
    {
        if (userid == null || goals == null)
        {
            return BadRequest();
        }

        bool result = await diaryManager.UpdateGoals(userid, goals);
        if (!result)
        {
            return Conflict();
        }

        return Ok(await diaryManager.GetDiary(userid));
    }

    [HttpPut("{userid}/dailyrecords/{date}")]
    [ProducesResponseType(typeof(DiaryDTO), (int)HttpStatusCode.OK)]
    public async Task<ActionResult<DiaryDTO>> PutRecord(string userid, string date, [FromBody] RecordUpdateDTO record)
    {
        if (userid == null || date == null || record == null)
        {
            return BadRequest();
        }

        bool result = await diaryManager.UpdateRecord(record);
        if (!result)
        {
            return Conflict();
        }

        return Ok(await diaryManager.GetDailyRecords(userid, date));
    }

    //DELETE

    [HttpDelete("{userid}")]
    [ProducesResponseType(typeof(ActionResult), (int)HttpStatusCode.OK)]
    public async Task<ActionResult> DeleteDiary(string userid)
    {
        if (userid == null)
        {
            return BadRequest();
        }

        bool result = await diaryManager.DeleteDiary(userid);
        if (!result)
        {
            return Conflict();
        }

        return Ok(userid);
    }

    [HttpDelete("{userid}/dailyrecords/{date}")]
    [ProducesResponseType(typeof(DiaryDTO), (int)HttpStatusCode.OK)]
    public async Task<ActionResult<DiaryDTO>> DeleteDailyRecords(string userid, string date)
    {
        if (userid == null || date == null)
        {
            return BadRequest();
        }

        bool result = await diaryManager.DeleteDailyRecords(userid, date);
        if (!result)
        {
            return Conflict();
        }

        return Ok(date);
    }

    [HttpDelete("{userid}/dailyrecords/{date}/records/{recordid}")]
    [ProducesResponseType(typeof(DiaryDTO), (int)HttpStatusCode.OK)]
    public async Task<ActionResult<DiaryDTO>> DeleteRecord(string userid, string date, string recordid)
    {
        if (userid == null || date == null || recordid == null)
        {
            return BadRequest();
        }

        bool result = await diaryManager.DeleteRecord(recordid);
        if (!result)
        {
            return Conflict();
        }

        return Ok(recordid);
    }
}