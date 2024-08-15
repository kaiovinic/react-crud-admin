import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Stack } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

import DataTable from "../pages/Users/components/DataTable";

import { User } from "../pages/Users/types/User";

export default function Grid() {
  const onCall = (params: GridRenderCellParams) => {
    // Chamada via WhatsApp
  };

  const onEdit = (params: GridRenderCellParams) => {
    // Edição de usuário
  };

  const onDelete = (params: GridRenderCellParams) => {
    // Exclusão de usuário
  };

  // Definição das colunas da tabela
  const columns: GridColDef<User>[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstName",
      headerName: "Nome",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.fullName.split(" ")?.shift() || ""}`,
    },
    {
      field: "lastName",
      headerName: "Sobrenome",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.fullName.split(" ")?.pop() || ""}`,
    },
    { field: "document", headerName: "CPF", width: 150 },
    {
      field: "age",
      headerName: "Idade",
      type: "number",
      valueGetter: (params: GridValueGetterParams) =>
        params.row.birthDate &&
        `${
          new Date().getFullYear() -
          new Date(params.row.birthDate).getFullYear()
        }`,
    },
    { field: "email", headerName: "E-mail", minWidth: 200 },
    { field: "mobile", headerName: "Celular", minWidth: 180 },
    {
      field: "actions",
      headerName: "Ações",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={2}>
          <IconButton
            color="success"
            size="small"
            onClick={() => onCall(params)}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>

          <IconButton color="info" size="small" onClick={() => onEdit(params)}>
            <EditIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            color="error"
            size="small"
            onClick={() => onDelete(params)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  // Criação de uma carga dummy de usuários
  const users = [
    {
      id: "1",
      fullName: "Felipe Fontoura",
      document: "986.007.560-30",
      birthDate: new Date(1982, 1, 1),
      email: "felipe@teste.com.br",
      emailVerified: true,
      mobile: "(11) 99999-9999",
      zipCode: "00000-000",
      addressName: "Rua Teste",
      number: "123",
      complement: "",
      neighborhood: "Bairro Teste",
      city: "São Paulo",
      state: "SP",
    },
  ];

  return <DataTable columns={columns} rows={users as User[]} />;
}
