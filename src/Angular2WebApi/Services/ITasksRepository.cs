using System.Collections.Generic;
using Angular2WebApi.Models;

namespace Angular2WebApi.Services
{
    public interface ITasksRepository
    {
        Task CreateOrUpdateTask(Task newTask);
        IEnumerable<Task> GetAllTasks();
        Task GetTaskById(int id);
    }
}