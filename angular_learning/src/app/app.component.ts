import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  taskElements = [{type:'individu',name:'Contoh',content:'Buat tugas angular_day3'}];
 
  onTaskAdded(taskData: {taskName:string,taskContent:string}) {
    this.taskElements.push({
      type: 'individu',
      name: taskData.taskName,
      content: taskData.taskContent
    });
  }

  onGroupTaskAdded(groupTaskData: {taskName:string,taskContent:string}) {
    this.taskElements.push({
      type: 'kelompok',
      name: groupTaskData.taskName,
      content: groupTaskData.taskContent
    });
  }

  onDestroy(){
    this.taskElements.splice(0,100);
  }


}
