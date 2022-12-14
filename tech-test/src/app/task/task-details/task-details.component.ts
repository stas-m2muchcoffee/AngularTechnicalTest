import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {

  currentTask$ = this.taskService.currentTask$;

  taskForm: FormGroup;
  currentTaskSubscription: Subscription;

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
      id: new FormControl(null),
      label: new FormControl(null),
      description: new FormControl(null),
      category: new FormControl(null),
      done: new FormControl(false),
    });

    this.currentTaskSubscription = this.currentTask$.pipe(
      filter(res => !!res),
    ).subscribe((task) => {
      this.taskForm.patchValue(task);
    });
  }

  ngOnDestroy(): void {
    this.currentTaskSubscription.unsubscribe();
  }

  editTask() {
    const { id, ...task } = this.taskForm.value;
    this.taskService.editTask(id, task);
  }
}
