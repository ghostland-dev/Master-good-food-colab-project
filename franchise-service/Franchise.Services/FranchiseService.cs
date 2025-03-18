using Franchise.Data;
using Franchise.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Franchise.Services
{
    public class FranchiseService
    {
        private readonly FranchiseDbContext _context;

        public FranchiseService(FranchiseDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Domain.Models.Franchise>> GetAllFranchises()
        {
            return await _context.Franchises.ToListAsync();
        }

        public async Task<Domain.Models.Franchise?> GetFranchiseById(int id)
        {
            return await _context.Franchises.FindAsync(id);
        }

        public async Task<Domain.Models.Franchise> CreateFranchise(Domain.Models.Franchise franchise)
        {
            _context.Franchises.Add(franchise);
            await _context.SaveChangesAsync();
            return franchise;
        }

        public async Task<bool> UpdateFranchise(int id, Domain.Models.Franchise franchise)
        {
            var existingFranchise = await _context.Franchises.FindAsync(id);
            if (existingFranchise == null) return false;

            existingFranchise.Name = franchise.Name;
            existingFranchise.Address = franchise.Address;
            existingFranchise.Owner = franchise.Owner;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteFranchise(int id)
        {
            var franchise = await _context.Franchises.FindAsync(id);
            if (franchise == null) return false;

            _context.Franchises.Remove(franchise);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
