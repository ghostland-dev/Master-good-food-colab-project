using Franchise.Domain.Models;
using Franchise.Services;
using Microsoft.AspNetCore.Mvc;

namespace Franchise.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FranchiseController : ControllerBase
    {
        private readonly FranchiseService _franchiseService;

        public FranchiseController(FranchiseService franchiseService)
        {
            _franchiseService = franchiseService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Domain.Models.Franchise>>> GetFranchises()
        {
            return Ok(await _franchiseService.GetAllFranchises());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Domain.Models.Franchise>> GetFranchise(int id)
        {
            var franchise = await _franchiseService.GetFranchiseById(id);
            if (franchise == null) return NotFound();
            return Ok(franchise);
        }

        [HttpPost]
        public async Task<ActionResult<Domain.Models.Franchise>> CreateFranchise(Domain.Models.Franchise franchise)
        {
            var createdFranchise = await _franchiseService.CreateFranchise(franchise);
            return CreatedAtAction(nameof(GetFranchise), new { id = createdFranchise.Id }, createdFranchise);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFranchise(int id, Domain.Models.Franchise franchise)
        {
            var updated = await _franchiseService.UpdateFranchise(id, franchise);
            if (!updated) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFranchise(int id)
        {
            var deleted = await _franchiseService.DeleteFranchise(id);
            if (!deleted) return NotFound();
            return NoContent();
        }
    }
}
