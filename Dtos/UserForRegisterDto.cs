﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Dtos
{
    public class UserForRegisterDto
    {
        //validations for Username
        [Required]
        public string Username {get; set;}
        
        //validations for Password
        [Required]
        [StringLength(8, MinimumLength =4, ErrorMessage ="You must specify password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}
