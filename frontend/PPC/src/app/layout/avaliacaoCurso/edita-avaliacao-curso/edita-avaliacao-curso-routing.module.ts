import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditaCursoComponent } from './edita-avaliacao-curso.component';

const routes: Routes = [
    {
        path: '',
        component: EditaCursoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditaCursoRoutingModule {}
