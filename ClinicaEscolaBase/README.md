# Base inicial - Clínica Escola de Psicologia

Pacote com Models, ViewModels, Enums, DbContext e Fluent API para um projeto ASP.NET Core MVC com EF Core + Identity.

## Estrutura
- `Models`: classes persistidas e mapeadas no banco
- `ViewModels`: classes voltadas às telas e formulários MVC
- `Enums`: enums usados nas regras e no banco
- `Configurations`: mapeamentos Fluent API
- `Data/ApplicationDbContext.cs`: contexto principal

## Premissas
- Usuários usam ASP.NET Identity.
- Professora administradora tem acesso total.
- Alunos só acessam pacientes vinculados de forma ativa.
- Documentos clínicos possuem uma tabela base e tabelas especializadas.
- Toda ação relevante deve ser auditada.

## Próximo passo
1. Copiar os arquivos para a solução.
2. Registrar o `ApplicationDbContext`.
3. Criar a migration inicial.
4. Implementar autorização por perfil e vínculo ativo.
5. Criar controllers e views para cadastro do paciente, prontuário, vínculo e documentos clínicos.
