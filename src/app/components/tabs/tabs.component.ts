import { Component, OnInit } from '@angular/core';
import { HeaderModel, TabAnimationSettingsModel } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public profileTabHeader: HeaderModel;
  public generalTabHeader: HeaderModel;
  public tabsAnimationSettings: TabAnimationSettingsModel;
  public data = {
    sampleName: 'Test Name',
    samplePhone: '999-999-9999'
  };

  constructor() { }

  ngOnInit() {
    this.profileTabHeader = {
      iconCss: 'fa fa-user-circle',
      text: 'Profile'
    };

    this.generalTabHeader = {
      iconCss: 'fa fa-info-circle',
      text: 'General'
    };

    this.tabsAnimationSettings = {
      next: {
        effect: 'None'
      },
      previous: {
        effect: 'None'
      }
    };
  }

}
