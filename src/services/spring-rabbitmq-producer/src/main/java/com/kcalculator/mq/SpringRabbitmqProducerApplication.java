package com.kcalculator.mq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SpringRabbitmqProducerApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringRabbitmqProducerApplication.class, args);
	}

}
