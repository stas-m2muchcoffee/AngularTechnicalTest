import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { map } from 'rxjs/operators';

import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public tasksTableDataSource$ = this.taskService.tasks$.pipe(
    map(tasks => new MatTableDataSource(tasks)),
  );

  displayedColumns = ['id', 'label', 'category', 'done', 'actions'];

  constructor(
    private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
  }
}
