import { Component, OnInit, ViewChild } from "@angular/core";
import { PacienteService } from "src/app/_service/paciente.service";
import { Paciente } from "src/app/_model/paciente";
import {
  MatTableDataSource,
  MatTable,
  MatSort,
  MatPaginator,
  MatSnackBar
} from "@angular/material";

@Component({
  selector: "app-paciente",
  templateUrl: "./paciente.component.html",
  styleUrls: ["./paciente.component.css"]
})
export class PacienteComponent implements OnInit {
  displayedColumns = ["idPaciente", "nombres", "apellidos", "acciones"];
  dataSource: MatTableDataSource<Paciente>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private pacienteService: PacienteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.listar();

    this.pacienteService.pacienteCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.pacienteService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, "AVISO", {
        duration: 2000
      });
    });
  }

  listar() {
    this.pacienteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(idPaciente: number) {
    this.pacienteService.eliminar(idPaciente).subscribe(() => {
      this.pacienteService.listar().subscribe(data => {
        this.pacienteService.pacienteCambio.next(data);
        this.pacienteService.mensajeCambio.next("SE ELIMINÓ");
      });
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
