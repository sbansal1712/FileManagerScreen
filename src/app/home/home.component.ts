import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { MatDialog } from "@angular/material/dialog";
import { interval, Subscription } from 'rxjs';
import { NewConversationDialogComponent } from '../new-conversation-dialog/new-conversation-dialog.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  username: any;
  LoggedInUser: any;
  conversations: any;
  checkAuth: boolean;
  subscription: Subscription;
  source = interval(2000);

  
  
  constructor(private dataService: DataService, private router : Router, private _snackbar: MatSnackBar,   private dialog: MatDialog,) {
   this.getAllConversations() 
   this.subscription = this.source.subscribe((val) =>
   this.refreshComments())
  }

  ngOnInit() {

    this.LoggedInUser = sessionStorage.getItem('username')
    if(this.LoggedInUser != undefined && this.LoggedInUser != null && this.LoggedInUser != ""){
      this.checkAuth = true
    }
   
    // this.dataService.getLoggedInName.subscribe((data) => {
    //   this.LoggedInUser = data
      
      
    //   console.log(this.LoggedInUser)
    // })

    
    
  } 

  refreshComments(): void {
    setTimeout(() => {
      this.getAllConversations()
      }
    , 2500);
  }

  goToConversation(conversation){
    console.log(conversation)
    this.dataService.conversationSubject.next(conversation)
    this.router.navigate(["Conversation", conversation._id] )
  }
  getAllConversations(){
    this.dataService.getAllConversations().subscribe((data) =>{
      this.conversations = data;
    })
  }
  goToRegister(){
    this.dataService.openErrorSnackBar('Please Login to Continue', '')
    this.router.navigate(['register'])
  }
  openDialog() {
    if(this.checkAuth){
      const dialogRef = this.dialog.open(NewConversationDialogComponent, {
        width: "800px",
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result != undefined){
         
        this.dataService.createNewConversation({
          username : sessionStorage.getItem("username"), ConversationTitle : result.Comment, createdOn : Date.now()
        }).subscribe((data : any) => {
          this.getAllConversations()
        })
        console.log(`Dialog result: ${result.Comment}`);
        }
      });
    }
    else{
      this.goToRegister();
    }
    
  }
}
