import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  public tasksTableDataSource$ = this.taskService.tasks$.pipe(
    map(tasks => new MatTableDataSource(tasks)),
  );

  displayedColumns = ['id', 'label', 'category', 'done', 'actions'];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  goToTaskDetails(taskId) {
    this.router.navigate([taskId], {
      relativeTo: this.route
    });
  }
}
