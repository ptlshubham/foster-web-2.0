import { Component } from '@angular/core';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectsProgressComponent } from './projects-progress/projects-progress.component';
import { WorkingScheduleComponent } from './working-schedule/working-schedule.component';
import { ProjectsAnalysisComponent } from './projects-analysis/projects-analysis.component';
import { ChatProjectsUserComponent } from './chat-projects-user/chat-projects-user.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-project-management',
    standalone: true,
    imports: [ProjectsOverviewComponent, AllProjectsComponent, ProjectsProgressComponent, WorkingScheduleComponent, ProjectsAnalysisComponent, ChatProjectsUserComponent, ToDoListComponent, RouterLink],
    templateUrl: './project-management.component.html',
    styleUrl: './project-management.component.scss'
})
export class ProjectManagementComponent {}