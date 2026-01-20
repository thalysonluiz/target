# Target - Gerenciador de Metas Financeiras

Um aplicativo mobile desenvolvido em React Native com Expo para ajudar você a gerenciar suas metas financeiras e controlar suas transações.

## 🎯 Funcionalidades

- **Gerenciamento de Metas**: Crie, edite e acompanhe suas metas financeiras
- **Registros de Transações**: Adicione e categorize suas transações
- **Progresso Visual**: Acompanhe o progresso em relação às suas metas
- **Persistência Local**: Dados armazenados localmente no dispositivo
- **Interface Intuitiva**: Design limpo e fácil de usar

## 🚀 Começando

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd target
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o desenvolvimento:
```bash
npx expo start
```

## 📱 Estrutura do Projeto

```
src/
├── app/                    # Rotas e telas da aplicação
│   ├── _layout.tsx        # Layout principal
│   ├── index.tsx          # Tela inicial
│   ├── target.tsx         # Gerenciamento de metas
│   ├── in-progress/       # Metas em progresso
│   └── transaction/       # Detalhes de transações
├── components/            # Componentes reutilizáveis
│   ├── Button/           # Componente de botão
│   ├── CurrencyInput/    # Input para valores monetários
│   ├── Input/            # Input de texto
│   ├── PageHeader/       # Header das páginas
│   ├── Progress/         # Indicador de progresso
│   ├── Summary/          # Resumo de dados
│   └── ...               # Outros componentes
├── database/             # Hooks para gerenciamento de banco de dados
├── theme/                # Configurações de tema e cores
└── utils/                # Funções utilitárias
```

## 🛠 Tecnologias Utilizadas

- **React Native** - Framework para aplicativos móveis
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **React Router** - Navegação entre telas

## 📊 Principais Componentes

- **Target**: Tela para criar e gerenciar metas financeiras
- **CurrencyInput**: Componente especializado para entrada de valores monetários
- **Progress**: Componente de visualização de progresso
- **Summary**: Componente para exibir resumos financeiros
- **Transaction**: Componente para exibir transações

## 🗄️ Banco de Dados

O projeto utiliza hooks customizados para gerenciar dados:
- `useTargetDatabase` - Operações com metas
- `useTransactionDatabase` - Operações com transações

## 🎨 Tema

O projeto inclui uma configuração centralizada de tema com:
- Paleta de cores
- Famílias de fontes
- Estilos globais

## 📝 Scripts Disponíveis

```bash
# Iniciar desenvolvimento
npx expo start

# Compilar para Android
npx expo build:android

# Compilar para iOS
npx expo build:ios

# Formatar código
npm run format
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do repositório.
