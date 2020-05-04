using MediatR;
using Persistence;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext DataContext;

            public Handler(DataContext context)
            {
                this.DataContext = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await DataContext.Activities.FindAsync(request.Id);

                if (activity == null)
                    throw new Exception("Could not find activity");

                DataContext.Remove(activity);
                
                var success = await DataContext.SaveChangesAsync() > 0;

                if (success)
                    return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}
