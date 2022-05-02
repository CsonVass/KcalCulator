package com.kcalculator.mq;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CustomMessage {

    private String messageId;
    private Date messageDate;


    private String toEmail;
    private String subject;
    private String body;

}
