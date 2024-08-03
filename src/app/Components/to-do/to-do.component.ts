import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  title:string = "To Do List Application";
  imgLink:string =  'https://imgs.search.brave.com/XR4hceloiqRazMhRjO1g0FPAClZlFw_usFmfWU0e58Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/NTEzMTU1OC9waG90/by90by1kby1saXN0/LXRleHQtb24tbm90/ZS1wYWQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWxSMDlT/UEhURDRQYjJ4Rkl6/d3pKZHFQNmROT3Zf/QURocUh6dkJzY1Vq/REE9';

  tasks:string[] = [];
  newTask:string = '';
  isAvailable:boolean =false;
  addTask(){
    if(this.newTask.trim() !== ''){
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.isAvailable = true;
    }
  }

  // editTask(index : number , newTask:string){
  //   let updatedTask = prompt('edit task' , this.tasks[index]);
  //   if(updatedTask !== null){
  //     this.tasks[index] = updatedTask.trim();
  //   }else{
  //     updatedTask = prompt('please enter task' , this.tasks[index])
  //   }
  // }

  editTask(index:number , newTaskEdit :string): string | void{
    const trimedTask = newTaskEdit.trim();

    if(trimedTask !== '')
    {
      this.tasks[index] = trimedTask;
    }
    else
    {
      newTaskEdit = this.tasks[index];
      return this.newTask = newTaskEdit;
    }
    this.newTask = ''
  }

  removeTask(index : number){
    this.tasks.splice(index,1);
    this.isAvailable = this.tasks.length > 0;
  }




}
