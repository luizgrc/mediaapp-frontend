import { MaterialModule } from "./material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PacienteComponent } from "./pages/paciente/paciente.component";
import { HttpClientModule } from "@angular/common/http";
import { PacienteEdicionComponent } from "./pages/paciente/paciente-edicion/paciente-edicion.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MedicoComponent } from "./pages/medico/medico.component";
import { ExamenComponent } from "./pages/examen/examen.component";
import { ConsultaComponent } from "./pages/consulta/consulta.component";
import { ExamenEdicionComponent } from "./pages/examen/examen-edicion/examen-edicion.component";
import { EspecialidadComponent } from "./pages/especialidad/especialidad.component";
import { EspecialidadEdicionComponent } from "./pages/especialidad/especialidad-edicion/especialidad-edicion.component";
import { DialogoComponent } from "./pages/medico/dialogo/dialogo.component";

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    PacienteEdicionComponent,
    MedicoComponent,
    ExamenComponent,
    ConsultaComponent,
    ExamenEdicionComponent,
    EspecialidadComponent,
    EspecialidadEdicionComponent,
    DialogoComponent
  ],
  entryComponents: [DialogoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
