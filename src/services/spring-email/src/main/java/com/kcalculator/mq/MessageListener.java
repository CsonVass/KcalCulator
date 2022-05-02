package com.kcalculator.mq;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class MessageListener {

    @Autowired
    private EmailSenderService senderService;

    @RabbitListener(queues = MQConfig.QUEUE)
    public void listener(CustomMessage message){
        System.out.println(message.getToEmail() + "\t" +
                message.getSubject() + "\t" + message.getBody());
        sendEmail(message);

    }

    public void sendEmail(CustomMessage message){
        senderService.sendEmail(message.getToEmail(),
                message.getSubject(),
                message.getBody());
    }
}
