using Franchise.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Franchise.Data;

public class FranchiseDbContext : DbContext
{
    public FranchiseDbContext(DbContextOptions<FranchiseDbContext> options) : base(options) { }

    public DbSet<Domain.Models.Franchise> Franchises { get; set; }
}

