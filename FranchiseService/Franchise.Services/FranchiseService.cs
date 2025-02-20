using Franchise.Data;
using Franchise.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Franchise.Services;

public class FranchiseService
{
    private readonly FranchiseDbContext _context;

    public FranchiseService(FranchiseDbContext context)
    {
        _context = context;
    }

    public async Task<List<Domain.Models.Franchise>> GetAllFranchises() => await _context.Franchises.ToListAsync();

    public async Task CreateFranchise(Domain.Models.Franchise franchise)
    {
        _context.Franchises.Add(franchise);
        await _context.SaveChangesAsync();
    }
}
