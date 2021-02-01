import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { MultiColumnLayoutComponent } from './multi-column-layout/multi-column-layout.component';
import { ExpandableCardComponent } from './expandable-card/expandable-card.component';
import { SwipeableSectionComponent } from './swipeable-section/swipeable-section.component';

const routes: Routes = [
    {
        path: "multi-column-layout",
        component: MultiColumnLayoutComponent
    }, 
    {
        path: "expandable-cards",
        component: ExpandableCardComponent
    },
    {
        path: "swipeable-section",
        component: SwipeableSectionComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
