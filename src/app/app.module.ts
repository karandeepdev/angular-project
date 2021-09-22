import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeviewComponent } from './treeview/treeview.component';

import {TreeTableModule} from 'primeng/treetable';
import { NodeService } from './node.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';


import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TreeDragDropService} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    TreeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeTableModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    MultiSelectModule,
    InputTextModule,
    ToastModule,
    ContextMenuModule,
    RouterModule.forRoot([])
  ],
  providers: [NodeService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
