import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../core/services/task.service';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  currentTask$ = this.taskService.currentTask$;

  taskForm: FormGroup;

  get labelControl() {
    return this.taskForm.get('label') as FormControl;
  }

  get descriptionControl() {
    return this.taskForm.get('description') as FormControl;
  }

  get categoryControl() {
    return this.taskForm.get('category') as FormControl;
  }

  get doneControl() {
    return this.taskForm.get('done') as FormControl;
  }

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      label: new FormControl(null),
      description: new FormControl(null),
      category: new FormControl(null),
      done: new FormControl(false),
    });

    this.currentTask$.pipe(
      filter(res => !!res),
    ).subscribe((task) => {
      this.taskForm.patchValue(task);
    });
  }
}
