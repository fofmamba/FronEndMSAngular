import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule }  from '@angular/material/button';
import { MatDividerModule }  from '@angular/material/divider';
import { MatIconModule }  from '@angular/material/icon';
import { MatInputModule }  from '@angular/material/input';
import { MatListModule }  from '@angular/material/list';
import { MatCardModule }  from '@angular/material/card';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatSidenavModule} from "@angular/material/sidenav";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator'
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';

// Pour le router
import { Routes, RouterModule } from '@angular/router';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';

import { AuthGuard } from './shared/auth.guard';

const routes:Routes = [
  {
    path: "",
    component:AssignmentsComponent,
  },
  {
    path: "home",
    component:AssignmentsComponent,
  },
  {
    path: "add",
    component:AddAssignmentComponent
  },
  {
    path: "assignment/:id",
    component:AssignmentDetailComponent
  },
  {
    path: "assignment/:id/edit",
    component:EditAssignmentComponent,
    canActivate:[AuthGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    FormsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule,
    MatListModule, MatCardModule, MatCheckboxModule, MatTableModule,
    MatToolbarModule,MatSidenavModule,
    FlexLayoutModule,
    MatNativeDateModule, MatSlideToggleModule, HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
