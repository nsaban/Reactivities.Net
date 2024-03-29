﻿using API.Controllers;
using Application.Profiles;
using Microsoft.AspNetCore.Mvc;

namespace API;

public class ProfilesController : BaseApiController
{
    [HttpGet("{username}")]
    public async Task<IActionResult> GetProfile(string username)
    {
        return HandleResult(await Mediator.Send(new Details.Query() { UserName = username }));
    }
}
