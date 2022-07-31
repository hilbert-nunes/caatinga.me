package com.hilbert.api;

import com.hilbert.api.role.Role;
import com.hilbert.api.user.AppUser;
import com.hilbert.api.user.AppUserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class CaatingaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CaatingaApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(AppUserService appUserService){
		return args -> {
			appUserService.saveRole(new Role(null,"ROLE_USER"));
			appUserService.saveRole(new Role(null,"ROLE_ADMIN"));

			appUserService.saveUser(new AppUser(null, "Hilbert Digenio", "hil_beer_t", "123321", new ArrayList<>()));

			appUserService.addRoleToUser("hil_beer_t", "ROLE_ADMIN");
		};
	}
}
