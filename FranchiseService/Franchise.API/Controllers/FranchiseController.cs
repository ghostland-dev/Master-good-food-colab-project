using Franchise.Domain.Models;
using Franchise.Services;
using Microsoft.AspNetCore.Mvc;

namespace Franchise.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FranchiseController : ControllerBase
{
    private readonly FranchiseService _service;

    public FranchiseController(FranchiseService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetFranchises()
    {
        return Ok(await _service.GetAllFranchises());
    }

    [HttpPost]
    public async Task<IActionResult> CreateFranchise([FromBody] Domain.Models.Franchise franchise)
    {
        await _service.CreateFranchise(franchise);
        return CreatedAtAction(nameof(GetFranchises), new { id = franchise.Id }, franchise);
    }
}
