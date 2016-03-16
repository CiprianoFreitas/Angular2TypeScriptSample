using Angular2WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Angular2WebApi.Services
{
    public class TasksRepository : ITasksRepository
    {
        private int idCounter = 0;
        private List<Task> _tasks;

        public TasksRepository()
        {
            _tasks = new List<Task>()
            {
                 new Task
                 {
                     ID = ++this.idCounter,
                     Description = "Apresentar CSI",
                     IsComplete = false
                 }
            };
        }

        public IEnumerable<Task> GetAllTasks()
        {
            return _tasks;
        }

        public Task GetTaskById(int id)
        {
            return _tasks.SingleOrDefault(t => t.ID == id);
        }

        public Task CreateOrUpdateTask(Task newTask)
        {
            if (newTask.ID == null)
            {
                newTask.ID = ++idCounter;
                _tasks.Add(newTask);
            }
            else
            {
                var task = _tasks.SingleOrDefault(t => t.ID == newTask.ID.Value);
                task = newTask;
            }

            return newTask;
        }
    }
}