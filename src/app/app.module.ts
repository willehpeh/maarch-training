import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagePreviewComponent } from './message-preview/message-preview.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from './message-list/message-list.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MessagePreviewComponent,
    MessageListComponent,
    LifecycleHooksComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
