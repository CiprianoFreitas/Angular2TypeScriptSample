using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using Angular2WebApi.Models;
using Angular2WebApi.Services;

namespace Angular2WebApi.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private readonly ITasksRepository _tasksRepo;

        public TasksController(ITasksRepository tasksRepo)
        {
            this._tasksRepo = tasksRepo;
        }

        // GET: api/tasks
        [HttpGet]
        public IEnumerable<Task> Get()
        {
            return _tasksRepo.GetAllTasks();
        }

        // GET api/tasks/5
        [HttpGet("{id}")]
        public Task Get(int id)
        {
            return _tasksRepo.GetTaskById(id);
        }

        // POST api/values
        [HttpPost]
        public Task Post([FromBody] Task newTask)
        {
            return _tasksRepo.CreateOrUpdateTask(newTask);
        }

    }
}
