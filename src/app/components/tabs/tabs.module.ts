import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRouting } from './tabs.routing';
import { TabsComponent } from './tabs.component';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';

@NgModule({
  declarations: [TabsComponent, Content1Component, Content2Component],
  imports: [CommonModule, TabsRouting, TabAllModule]
})
export class TabsModule {}
