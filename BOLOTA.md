# Batalha de dados - Itaú - 12/2018
**Sociedade Beneficente de Senhoras - Hospital Sírio-Libanês**

## Desafio
Aplicar Ciência de Dados na Gestão da Saúde Pública para o combate ao Câncer de Mama

## Por que é um problema
Câncer de Mama é o tipo mais comum de câncer entre as mulheres no mundo, ficando atrás apenas do Câncer de Pele não melanoma. São cerca de 28% dos novos casos a cada ano.

Estatísticas indicam aumento na sua incidência tanto nos países desenvolvidos quanto nos em desenvolvimento. O Instituto Nacional do Câncer (INCA) estima, em 2018, 59.700 de novos casos. Dados de 2013 somam 14.206 mortes de mulheres devido ao Câncer de Mama.

Existem vários tipos de Câncer de Mama. Alguns evoluem de forma rápida, outros não. A maioria dos casos, no entanto, têm bom prognóstico, porém a jornada do seu tratamento é extremante desafiadora para qualquer paciente.

Mesmo em São Paulo, onde o SUS oferece melhores condições para os pacientes oncológicos, o tempo de espera para o início do tratamento na iniciativa privada leva algumas semanas enquanto na rede pública pode-se levar vários meses. É notório o abismo entre os diferentes acessos aos tratamentos.

## Quais são os problemas
* Tratamento complexo compreendendo diversas especialidades;
* Deslocamento: atendimento fragmentado e pulverizado geograficamente;
* Custo oncológico crescente;
* Tempo entre diagnóstico e início do tratamento;
* Diagnóstico tardio;
* Fraudes.

## Direcionadores
* Workflow dos tratamentos;
* Tamanho do deslocamento dos pacientes;
* Tempo de espera entre diagnóstico e início do tratamento;
* Custo do tratamento para o poder público e para o paciente;
* Capacidade dos estabelecimentos.

## Fonte dos dados
Foram processados quase 500GB de dados originários do [DataSUS](http://www2.datasus.gov.br/DATASUS/index.php?area=0901). Os arquivos extraídos foram **SIHSUS.RD**, **SIASUS.PA**, **SIASUS.APAC** e **SIM.DO** compreendendo o período 2013-2018, exceto SIM.DO cujo período disponível vai até 2016.

## Arquivos processados
| Nome do arquivo                            | Tamanho | Nro. Registros |
|--------------------------------------------|--------:|---------------:|
| AutIntHos-DataSUS-2013-2018.csv            | 116Mb   | 354284         |
| Obitos-DataSUS-2013-2016.csv               | 17Mb    | 126468         |
| Procedimentos-DataSUS-2013-2018.brasil.csv | 4.1Gb   | 10258188       |

## Dicionário dos dados

### AutIntHos-DataSUS-2013-2018.csv

Coluna                          | Tipo            | Descrição
:-------------------------------|:----------------|:-----------
AIH_ID                          | char(13)        | Número da AIH
AIH_TIPO                        | char(1)         | Tipo da AIH
PROCESSAMENTO_ANO               | char(4)         | Ano de processamento, formato aaaa
PROCESSAMENTO_MES               | char(2)         | Mês de processamento
LEITO_TIPO                      | char(100)       | Especialidade do Leito
PACIENTE_CEP                    | char(8)         | CEP do Paciente
PACIENTE_MUNICIPIO              | char(50)        | Município do Paciente
PACIENTE_UF                     | char(2)         | UF do Paciente
PACIENTE_DATA_NASCIMENTO        | char(8)         | Data de nascimento, formato aaaammdd
PACIENTE_SEXO                   | char(1)         | Sexo do Paciente;<BR>1: Masculino<BR>2-3: Feminino<BR>4-9: Ignorado
UTI_QTD_DIAS                    | numeric(3)      | Quantidade de dias de UTI no mês
DIARIA_INTERMEDIARIA            | numeric(3)      | Quantidade de diárias em unidade intermediária
DIARIA_ACOMPANHANTE             | numeric(3)      | Quantidade de diárias de acompanhante
DIARIA                          | numeric(3)      | Quantidade de diárias
PROCEDIMENTO_SOLICITADO_ID      | char(10)        | Id do procedimento solicitado
PROCEDIMENTO_SOLICITADO_DESC    | char(100)       | Descrição do procedimento solicitado
PROCEDIMENTO_REALIZADO_ID       | char(10)        | Id do procedimento realizado
PROCEDIMENTO_REALIZADO_DESC     | char(100)       | Descrição do procedimento realizado
VALOR_SERVICO_HOSPITALAR        | numeric(13,2)   | valor de serviços hospitalares
VALOR_SERVICO_PROFISSIONAL      | numeric(13,2)   | Valor de serviços profissionais
VALOR_TOTAL                     | numeric(13,2)   | Valor total da AIH
VALOR_UTI                       | numeric(13,2)   | Valor de UTI
INTERNACAO_DATA                 | char(8)         | Data de internação, formato aaaammdd
INTERNACAO_ALTA                 | char(8)         | Data de saída, formato aaaammd
CID_PRINCIPAL                   | char(4)         | CID Principal
CID_PRINCIPAL_DESC              | char(100)       | Descrição da CID Principal
CID_SECUNDARIA                  | char(4)         | CID Secundária
CID_SECUNDARIA_DESC             | char(100)       | Descrição da CID Secundária
CID_ASSOCIADA                   | char(4)         | CID Associada
CID_ASSOCIADA_DESC              | char(100)       | Descrição da CID Associada
CID_NOTIFICACAO                 | char(4)         | CID de Notificação
CID_NOTIFICACAO_DESC            | char(100)       | Descrição da CID de Notificação
CID_MORTE                       | char(4)         | CID da Morte
CID_MORTE_DESC                  | char(100)       | Descrição da CID da Morte
IDADE_MEDIDA                    | char(1)         | Unidade de medida da idade;<BR>0:Ignorada<BR>1:Horas<BR>2:Dias<BR>3:Meses<BR>4:Anos(<100)<BR>5:Anos(>=100)
IDADE                           | numeric(2)      | Idade do Paciente
DIAS_PERMANENCIA                | numeric(5)      | Dias de permanência
MORTE                           | numeric(1)      | Indicador de Morte
PACIENTE_GRAU_INSTRUCAO         | char(1)         | Grau de instrução;<BR>1:Analfabeto<BR>2:Primeiro grau<BR>3:Segundo grau<BR>4:Terceiro grau<BR>5:Ignorado
GESTANTE_RISCO                  | char(1)         | Indicador se é gestante de risco
CNES                            | char(7)         | Código CNES do Hospital
CNES_MUNICIPIO                  | char(50)        | Município do Hospital
CNES_UF                         | char(2)         | UF do Hospital
CNES_CEP                        | char(8)         | CEP do Hospital
CNES_FANTASIA                   | char(100)       | Nome fantasia do Hospital
INFECCAO_HOSPITALAR             | char(1)         | Indicador de infecção hospitalar
COMPLEXIDADE                    | char(2)         | Complexidade;<BR>01:Atenção básica<BR>02:Média complexidade<BR>03:Alta complexidade<BR>00,04-99:Não se aplica
PACIENTE_RACA_COR               | char(4)         | Raça/Cor do paciente;<BR>1:Branca <BR>2:Preta <BR>3:Amarela <BR>4: Parda <BR>5: Indígena

### Obitos-DataSUS-2013-2016.csv

Coluna                          | Tipo            | Descrição
:-------------------------------|:----------------|:-----------
OBITO_ID                        | char(8)         | Número da Declaração de Óbito
OBITO_TIPO                      | char(1)         | Tipo do óbito;<BR>1: óbito fetal<BR>2:óbito não fetalOBITO_DATA                      | char(8)         | Data do óbito, formato ddmmaaaa
OBITO_HORA                      | char(4)         | Hora do óbito, formato hh:mm
DATA_NASCIMENTO                 | char(8)         | Data de nascimento, formato ddmmaaaa
SEXO                            | char(1)         | Sexo do falecido;<BR>1: Masculino<BR>2-3: Feminino<BR>4-9: Ignorado
RACA_COR                        | char(1)         | Raça/Cor do falecido;<BR>1:Branca <BR>2:Preta <BR>3:Amarela <BR>4: Parda <BR>5: Indígena
ESTADO_CIVIL                    | char(1)         | Estado civil do falecido;<BR>1: Solteiro<BR>2: Casado<BR>3: Viúvo<BR>4: Separado judicialmente<BR>9: Ignorado
ESCOLARIDADE                    | char(1)         | Escolaridade do falecido em anos de estudo;<BR>1: Nenhum<BR>2: 1 a 3 anos<BR>3: 4 a 7 anos<BR>4: 8 a 11 anos<BR>5: 12 e mais anos<BR>9: Ignorado
RESIDENCIA_MUNICIPIO            | char(50)        | Município de residência
RESIDENCIA_UF                   | char(2)         | UF de residência
OBITO_LOCAL                     | char(1)         | Local do óbito;<BR>1: Hospital<BR>2: Outro estabelecimento de saúde<BR>3: Domicílio<BR>4: Via pública<BR>5: Outros<BR>9: Ignorado
OBITO_MUNICIPIO                 | char(50)        | Município do óbito
OBITO_UF                        | char(2)         | UF do óbito
CNES                            | char(7)         | Código CNES do estabelecimento de saúde
CNES_MUNICIPIO                  | char(50)        | Município do estabelecimento de saúde
CNES_UF                         | char(2)         | UF do estabelecimento de saúde
CNES_CEP                        | char(8)         | CEP do estabelecimento de saúde
CNES_FANTASIA                   | char(100)       | Nome fantasia do estabelecimento de saúde
QTD_FILHOS_VIVOS                | char(2)         | Quantidade de filhos vivos que deixou o falecido
QTD_FILHOS_MORTOS               | char(2)         | Quantidade de filhos mortos ou ignorados
GRAVIDEZ                        | char(1)         | Tipo de gravidez;<BR>1: Única<BR>2: Dupla<BR>3: Tripla ou mais<BR>9: Ignorado
GESTACAO                        | char(1)         | Semanas de gestação;<BR>1: Menos de 22 semanas<BR>2: 22 a 27 semanas<BR>3: 28 a 31 semanas<BR>4: 32 a 36 semanas<BR>5: 37 a 41 semanas<BR>6: 42 semanas ou mais<BR>9: Ignorado
PARTO                           | char(1)         | Tipo de parto;<BR>1: Vaginal<BR>2: Cesáreo<BR>9: Ignorado
OBITO_PARTO                     | char(1)         | Morte em relação ao parto;<BR>1: Antes<BR>2: Durante<BR>3: Depois<BR>9: Ignorado
OBITO_GRAVIDEZ                  | char(1)         | Morte durante a gravidez;<BR>1: Sim<BR>2: Não
ASSISTENCIA_MEDICA              | char(1)         | Houve assistência médica;<BR>1: Sim<BR>2: Não
EXAME                           | char(1)         | Houve exame complementar;<BR>1: Sim<BR>2: Não
CIRURGIA                        | char(1)         | Houve cirurgia;<BR>1: Sim<BR>2: Não
NECROPSIA                       | char(1)         | Houve necrópsia;<BR>1: Sim<BR>2: Não
CAUSA_CID                       | char(4)         | CID da Causa Básica
CAUSA_CID_DESC                  | char(100)       | Descrição da CID da Causa Básica
CIRCUNSTANCIA                   | char(1)         | Circunstância do óbito;<BR>1: Acidente<BR>2: Suicídio<BR>3: Homicídio<BR>4: Outros<BR>9: Ignorado
ACIDENTE_TRABALHO               | char(1)         | Foi acidente de trabalho;<BR>1: Sim<BR>2: Não
FONTE                           | char(1)         | Fonte da informação;<BR>1: Boletim de ocorrência<BR>2: Hospital<BR>3: Família<BR>4: Outra<BR>9: Ignorado
INVESTIGACAO                    | char(1)         | Houve investigação;<BR>1: Sim<BR>2: Não
INVESTIGACAO_DATA               | char(8)         | Data da investigação, formato ddmmaaaa
INVESTIGACAO_FONTE              | char(1)         | Fonte da investigação;<BR>1: Comitê de Morte Materna e/ou Infantil<BR>2: Visita domiciliar / entrevista família<BR>3: Estabelecimento de saúde / Prontuário<BR>4: Outros bancos de dados<BR>5: SVO<BR>6: IML<BR>7: Outra fonte<BR>8: Múltiplas fontes<BR>9: Ignorado

### Procedimentos-DataSUS-2013-2018.brasil.csv

Coluna                           | Tipo            | Descrição
:--------------------------------|:----------------|:-----------
APAC.AUTORIZACAO                 | char(13)        | Número APAC, formato UFAATsssssssd, UF, AA:ano, T:tipo, sssssss: sequencial, d: dígito
APAC.AUTORIZACAO_DATA            | char(8)         | Data da autorização, formato aaaammdd
APAC.SOLICITACAO_DATA            | char(8)         | Data da solicitação, format aaaammdd
APAC.PROCEDIMENTO_PRINCIPAL_ID   | char(10)        | Código do procedimento principal
APAC.PROCEDIMENTO_PRINCIPAL_DESC | char(100)       | Descrição do procedimento principal
APAC.VALOR_TOTAL_APROVADO        | numeric(12,2)   | Valor total aprovado
APAC.PACIENTE_ID                 | varchar(32)     | Identificação do paciente
APAC.PACIENTE_MUNICIPIO          | varchar(100)    | Município do paciente
APAC.PACIENTE_UF                 | varchar(2)      | UF do paciente
APAC.PACIENTE_CEP                | varchar(8)      | CEP do paciente
APAC.PACIENTE_UF_DIF             | varchar(1)      | Indica se a UF de residência é diferente da UF do estabelecimento
APAC.PACIENTE_MUNICIPIO_DIF      | varchar(1)      | Indica se o município de residência é diferente do município do estabelecimento
PA.CNES                          | varchar(7)      | Código CNES do estabelecimento
PA.CNES_MUNICIPIO                | varchar(50)     | Município do estabelecimento
PA.CNES_UF                       | varchar(2)      | UF do estabelecimento
PA.CNES_CEP                      | varchar(8)      | CEP do estabelecimento
PA.CNES_FANTASIA                 | varchar(100)    | Nome fantasia do estabelecimento
PA.GESTAO_MUNICIPIO              | varchar(50)     | Município do gestor
PA.GESTAO_UF                     | varchar(2)      | UF do gestor
PA.GESTA_TIPO                    | varchar(2)      | Tipo de gestão;<BR>MN: Municipio Pleno NOAS<BR>EC: Estado Convencional<BR>PA: Municipio Pleno da Atenção Básica NOAS<BR>PB: Municipio Pleno da Atenção Básica NOB 9<BR>PG: Pacto de Gestão<BR>MP: Municipio Pleno NOB
PA.PROCESSAMENTO_DATA            | varchar(8)      | Data do processamento, formato aaaammdd
PA.PROCEDIMENTO_DATA             | varchar(8)      | Data do procedimento, formato aaaammdd
PA.PROCEDIMENTO_ID               | varchar(10)     | Código do procedimento
PA.PROCEDIMENTO_DESC             | varchar(100)    | Descrição do procedimento
PA.PROCEDIMENTO_COMPLEXIDADE     | varchar(1)      | Complexidade;<BR>0: Não se Aplica<BR>1: Atenção Básica<BR>2: Média Complexidade<BR> 3: Alta Complexidade
PA.ORIGEM                        | varchar(1)      | Instrumento de registro;<BR>P: procedimento principal;<BR>S: procedimento secundário<BR>C: BPA-C<BR>A: RAAS-AD<BR>B: RAAS-Psicossocial<BR>I: BPA-Individualizado
PA.MEDICO_ID                     | varchar(32)     | CNS do médico
PA.MEDICO_OCUPACAO               | varchar(100)    | Ocupação do médico
PA.OBITO                         | varchar(1)      | Indicador de óbito
PA.ALTA                          | varchar(1)      | Indicador de alta
PA.TRANSFERENCIA                 | varchar(1)      | Indicador de transferência
PA.CID_PRINCIPAL                 | varchar(4)      | CID Principal
PA.CID_PRINCIPAL_DESC            | varchar(100)    | Descrição da CID Principal
PA.CID_SECUNDARIA                | varchar(4)      | CID Secundária
PA.CID_SECUNDARIA_DESC           | varchar(100)    | Descriçao da CID Secundária
PA.CID_ASSOCIADA                 | varchar(4)      | CID Associada
PA.CID_ASSOCIADA_DESC            | varchar(100)    | Descrição da CID Associada
PA.IDADE                         | varchar(3)      | Idade do paciente em anos
PA.SEXO                          | varchar(1)      | Sexo do paciente;<BR>0: Não exigido<BR>1: Masculino<BR>2: Feminino
PA.RACA_COR                      | varchar(2)      | Raça/Cor do paciente;<BR>01: Branca<BR>02: Preta<BR>03: Parda<BR>04: Amarela<BR>05: Indígena<BR>99: Sem informação
PA.QTD_APRESENTADA               | numeric(11)     | Quantidade apresentada do procedimento
PA.QTD_APROVADA                  | numeric(11)     | Quantidade aprovada do procedimento
PA.VALOR_APRESENTADO             | numeric(20,2)   | Valor apresentado
PA.VALOR_APROVADO                | numeric(20,2)   | Valor aprovado
PA.STATUS_ID                     | char(1)         | Código da situação do procedimento
PA.STATUS_DESC                   | varchar(50)     | Descrição da situação do procedimento
  
  
### estabelecimentos saude NEOWAY
  
Coluna | Tipo | Descricao
:---|:---|:---
CD_CNES | Campo Numérico | CNES - Número do Cadastro Nacional de Estabelecimentos de Saúde
CD_CPF | string | CPF - Cadastro de Pessoa Física
CD_CNPJ | string | CNPJ - Cadastro Nacional de Pessoa Jurídica
NM_RAZAO_SOCIAL | string | Razão Social - Nome oficial e registrado sob o qual uma pessoa jurídica/empresa exerce suas atividades
NM_FANTASIA | string | Nome Fantasia - Nome comercial sob o qual uma empresa  se torna conhecida do público
CD_NATUREZA_JURIDICA | string | Código Natureza Jurídica - Código Natureza Jurídica
DE_NATUREZA_JURIDICA | string | Descrição Natureza Jurídica - Descrição Natureza Jurídica
TIPO_ESTABELECIMENTO |  | "Tipo de Estabelecimento - Descrição do tipo de estabelcimento
DT_CADASTRO | date | Data Cadastro - Data do cadastro do estabelecimento no CNES
DT_ATUALIZACAO_CADASTRO | date | Atualização do Cadastro - Atualização cadastral pelo Estabelecimento de Saúde
DESCRICAO_ATIVIDADE_ENSINO_PESQUISA | string | Atividade de Ensino e Pesquisa - Indica se o Estabelecimento possui alguma atividade de Ensino ou Pesquisa
FL_ESTAB_EXCLUIDO | string | Estabelecimento excluído - Indica se o estabelecimento consta no arquivo de cadastro de estabelecimentos como excluído (Sim/Não)
FLUXO_CLIENTELA | string | Fluxo de Clientela - Identifica se o atendimento é de demanda expontanea ou referenciada
TURNO_ATENDIMENTO | string | Turno de atendimento - Identifica o turno de atendimento do Estabelecimento
DESCRICAO_GESTAO | string | Gestão - Indica se a Gestão do Estabelecimento é Municipal ou Estadual
CD_CPF_DIRETOR_CLINICO | string | CPF Diretor Clínico - Cadastro de Pessoa Física do diretor clinico do estabelecimento
MANTENEDORA_CD_CNPJ | string | CNPJ - Cadastro Nacional de Pessoa Jurídica da Mantenedora do Estabelecimento
MANTENEDORA_NM_RAZAO_SOCIAL | string | Razão Social - Nome oficial e registrado sob o qual uma pessoa jurídica/empresa exerce suas atividades
MANTENEDORA_NM_FANTASIA | string | Nome Fantasia - Nome comercial sob o qual uma empresa mantenedora  se torna conhecida do público
MANTENEDORA_CD_NATUREZA_JURIDICA | string | Código Natureza Jurídica - Código Natureza Jurídica
MANTENEDORA_DE_NATUREZA_JURIDICA | string | Descrição Natureza Jurídica - Descrição Natureza Jurídica
MANTENEDORA_DE_SITUACAO | string | Situação Cadastral - Situação da empresa na Receita Federal
MANTENEDORA_CNAE_PRINCIPAL | string | Identificador do CNAE principal - Código da Classificação Nacional de Atividades Econômicas
MANTENEDORA_DESCRICAO_CNAE_PRINCIPAL | string | Descrição do CNAE principal - Descrição da Classificação Nacional de Atividades Econômicas
FL_VINCULO_SUS | string | Possui vínculo SUS - Indica se o Estabelecimento possui contrato para atendimento SUS
NM_LOGRADOURO | string | Logradouro - Endereço de cadastro
NU_LOGRADOURO | string | Numero - Número do endereço de cadastro
NM_BAIRRO | string | Bairro - Bairro do endereço de cadastro
NM_MUNICIPIO | string | Município - Município do endereço de cadastro
SG_UF | string | UF - Estado
NM_MACRORREGIAO_SAUDE | string | Macrorregião de Saúde - Macrorregião de Saúde do endereço de cadastro
CD_CEP | string | CEP - CEP
QTD_FUNCIONARIOS | int | Quantidade de funcionários - Quantidade de funcionários registrados na empresa
RENDA_MEDIA_PER_CAPITA_POPULACAO |  | "Renda média per capita da população - Renda média per capita da população
TIPO_ATENDIMENTO_PRESTADO |  Urgência...)" | "Tipos e Atendimentos - Tipo de atendimento prestado (Ambulatorial
CONVENIOS | string | Convênios - Tipo de convênios que atende
ATIVIDADE_TIPO | string | Atividade - Se possui atividade Ambulatorial ou Hospitalar
ATIVIDADE_NIVEL_ATENCAO | string | Nível de Atenção - Complexidade das atividades do Estabelecimento
ATIVIDADE_GESTAO | string | Gestão - Tipo de Gestão das atividades
HABILITACOES_CODIGO | string | Código Habilitação - Código da Habilitação
HABILITACOES_DESCRICAO | string | Descrição habilitação - Descrição da habilitação para desenvolver funções específicas exigidas para a realização de determinado procedimento.
HABILITACOES_COMPETENCIA_INICIAL | string | Competência inicial - Data de início da Habilitação
HABILITACOES_COMPETENCIA_FINAL | string | Competência final - Data fim da Habilitação
HABILITACOES_PORTARIA | string | Portaria - Registro da Portaria da Habilitação
HABILITACOES_DT_PORTARIA | string | Data Portaria - Data da publicação da Portaria
HABILITACOES_QTD_LEITOS | string | Quantidade de Leitos - Quantidade de leitos habilitados na Portaria
INCENTIVOS_CODIGO | string | Código Incentivos - Código de registro do Incentivo
INCENTIVOS_DESCRICAO | string | Descrição Incentivos - Descrição do Incentivo que é definido por : Financiamento e a transferência dos recursos federais para as ações e os serviços de saúde do Sistema Único de Saúde.
INCENTIVOS_COMPETENCIA_INICIAL | string | Competência inicial - Data do inicio do recebimento do Incentivo
INCENTIVOS_COMPETENCIA_FINAL | string | Competência final - Data fim do recebimento do Incentivo
INCENTIVOS_PORTARIA | string | Portaria - Portaria que registrou o Incentivo
INCENTIVOS_DT_PORTARIA | string | Data Portaria - Data do registro da Portaria do Incentivo
QTD_TOTAL_LEITOS_EXISTENTES | int | Quantidade total de leitos existentes - Somatorio dos leitos existentes no estabelecimento
QTD_TOTAL_LEITOS_SUS | int | Quantidade total de leitos SUS - Somatorio dos leitos existentes SUS no estabelecimento
QTD_TOTAL_LEITOS_NAO_SUS | int | Quantidade total de leitos não SUS - Somatorio dos leitos existentes Não SUS no estabelecimento
LEITO_TIPO | string | Tipo Leito - Classificação dos tipos de leitos
LEITO_ESPECIALIDADE | string | Especialidade - Especialidade dos leitos
LEITO_QTD_POR_ESPECIALIDADE | string | Quantidade de Leitos por especialidade - Quantidade de Leitos por especialidade
LEITO_QTD_POR_ESPECIALIDADE_SUS | string | Quantidade leitos por especialidade SUS - Quantidade leitos por especialidade SUS
LEITO_QTD_POR_ESPECIALIDADE_NAO_SUS | string | Quantidade Leitos por especialidade Não SUS - Quantidade Leitos por especialidade Não SUS
SERVICO_CODIGO | string | Código Serviço - Código da classificação do serviço oferecido pelo estabelecimento
SERVICO_DESCRICAO | string | Serviço - Descrição do serviço de acordo com o conjunto de ações realizadas pelo estabelecimento
SERVICO_CARACTERISTICA | string | Característica - Identifica se o serviço oferecido é próprio
SERVICO_CLASSIFICACAO | string | Descrição da Classificação - Descrição da classificação so serviço oferecido
SERVICO_HOSPITALAR_SUS | string | Hospitalar SUS - Se o serviço oferecido é Hospitalar SUS
SERVICO_HOSPITALAR_NAO_SUS | string | Hospitalar Não SUS - Se o serviço oferecido é Hospitalar Não SUS
SERVICO_AMBULATORIAL_SUS | string | Ambulatorial SUS - Se o serviço oferecido é Ambulatorial SUS
SERVICO_AMBULATORIAL_NAO_SUS | string | Ambulatorial Não SUS - Se o serviço oferecido é Ambulatorial Não SUS
SERVICO_TERCEIRO | string | Terceiro - Se existe um terceiro que presta o serviço
SERVICO_TURNO_ATENDIMENTO | string | Turno de atendimento - Turno de atendimento do serviço que é prestado
INSTALACAO_FISICA_CATEGORIA | string | Categoria - Classificação das instalações físicas por categoria
INSTALACAO_FISICA_DESCRICAO |  | "Instalação - Tipo de instalação física (leito
INSTALACAO_FISICA_QTD_CONSULTORIOS | string | Quantidade de Consultórios - Quantidade de Consultórios
INSTALACAO_FISICA_QTD_LEITOS | string | Quantidade de Leitos - Quantidade de Leitos
SERVICO_APOIO_TIPO | string | Tipo - Tipo do serviço de apoio do estabelecimento
SERVICO_APOIO_CARACTERISTICA | string | Característica - Se próprio ou terceirizado
COLETA_RESIDUOS_REJEITOS_TIPO | string | Tipo de Coleta - Tipo de coleta de resíduos e rejeitos que o estabelecimento realiza
COMISSOES_DESCRICAO | string | Comissões - Descrição das comissões existentes no estabelecimento
QTD_TOTAL_EQUIPAMENTOS_EXISTENTES | int | Quantidade de equipamentos existentes - Quantidade de equipamentos existentes
QTD_TOTAL_EQUIPAMENTOS_EM_USO | int | Quantidade de equipamentos em uso - Quantidade de equipamentos em uso
EQUIPAMENTO_TIPO | string | Tipo do Equipamento - Tipo do Equipamento
EQUIPAMENTO_NOME | string | Nome do Equipamento - Nome do Equipamento
EQUIPAMENTO_QTD_EM_USO | string | Quantidade em uso - Quantidade em uso
EQUIPAMENTO_QTD_EXISTENTE | string | Quantidade existente - Quantidade existente
EQUIPAMENTO_SUS | string | SUS - Equipamento usado para atendimento SUS
EQUIPAMENTO_NAO_SUS | string | Não SUS - Equipamento usado para atendimento não SUS
PROFISSIONAIS_QUANTIDADE | int | Quantidade de Profisisonais - Quantidade de Profissionais do estabelecimento cadastrados no CNES
EQUIPE_SAUDE_TIPO | string | Tipo de Equipe - Tipo de equipe de saúde
EQUIPE_SAUDE_NOME | string | Nome - Nome da equipe de saúde
EQUIPE_SAUDE_CODIGO_AREA | string | Código da área - Código da área atendida pela equipe de saúde
EQUIPE_SAUDE_SEGMENTO | string | Segmento - Seguimento da área atendida pela equipe
EQUIPE_SAUDE_ATENDE_QUILOMBOLAS | string | Atende Quilombolas - Indica se a equipe atende população quilombola
EQUIPE_SAUDE_ATENDE_ASSENTADOS | string | Atende assentados - Indica se a equipe atende população de assentados
EQUIPE_SAUDE_ATENDE_POPULACAO | string | Atende população geral - Indica se a equipe atende população geral
EQUIPE_SAUDE_ATENDE_ESCOLA | string | Atende escola - Indica se a equipe atende população de escola
EQUIPE_SAUDE_ATENDE_INDIGENA | string | Atende indígena - Indica se a equipe atende população indígena
EQUIPE_SAUDE_ATENDE_PRONASCI | string | Atende PRONASC - Indica se a equipe atende população das áreas indicadas no PRONASC
ATENDE_PLANO_DE_SAUDE | string | Operadoras e Planos de Saúde - Indica se atende plano de saúde
OPERADORA_CLASSIFICACAO | string | Classificação do Prestador - Classificado como Assistência Hospitalar
OPERADORA_NOME | string | Operadora - Nome da Operadora de Planos de Saúde
OPERADORA_PORTE | string | Porte da Operadora - Porte da Operadora
OPERADORA_TIPO_CONTRATACAO | string | Tipo de Contratação - Tipo da contratação do Plano
OPERADORA_TIPO_SEGMENTACAO | string | Tipo de Segmentação - Segmento do Plano
OPERADORA_AREA_COBERTURA | string | Área de Cobertura - Área de Cobertura do Plano
OPERADORA_SITUACAO_PLANO | string | Situação do Plano - Situação de comercialização do Plano
OPERADORA_TIPO_RELACAO_JURIDICA | string | Tipo de Relação Jurídica - Tipo de relação jurídica da Operadora com o Estabelecimento
OPERADORA_DT_INICIO_VINCULO | string | Data início do vínculo - Data inicio do vínculo com a Operadora
OPERADORA_DT_FIM_VINCULO | string | Data fim do vínculo - Data fim do vínculo com a Operadora
QTD_TOTAL_PROCEDIMENTOS_ULTIMO_MES_SUS_SIA | int | Total de procedimentos no último mês - Antedimento Ambunlatorial SUS (SIA) - Somatório dos procedimentos apresentados pelo estabelecimento no último mês de competência Antedimento Ambunlatorial SUS (SIA)
VALOR_TOTAL_PROCEDIMENTOS_ULTIMO_MES_SUS_SIA | numeric | Valor total de procedimentos no último mês - Antedimento Ambunlatorial SUS (SIA) - Somatório do valor total dos procedimentos apresentados pelo estabelecimento no último mês de competência
ATEND_AMBULATORIAL_SUS_SIA_PROCEDIMENTO | string | Procedimento - Descrição do procedimento
ATEND_AMBULATORIAL_SUS_SIA_CODIGO | string | Código - Código do procedimento
ATEND_AMBULATORIAL_SUS_SIA_QTD_APRESENTADA | string | Quantidade apresentada último mês - Quantidade dos procedimentos apresentados pelo estabelecimento
ATEND_AMBULATORIAL_SUS_SIA_VALOR | string | Valor apresentado último mês - Valor dos procedimentos apresentados no último mês de competência
ATEND_AMBULATORIAL_SUS_SIA_MKT_SHARE_MUNCIPIO | string | Market Share Município - Representa a proporção dos procedimentos que o estabelecimento apresentou em relação a macrorregião de localização do estabelecimento
ATEND_AMBULATORIAL_SUS_SIA_MKT_SHARE_MACROREG | string | Market Share Macrorregião - Representa a proporção dos procedimentos que o estabelecimento apresentou em relação ao município de localização do estabelecimento
QTD_TOTAL_PROCEDIMENTOS_ULTIMO_MES_SUS_SIH | int | Total de procedimentos no último mês  - Internação Hospitalar SUS (SIH) - Somatório dos procedimentos apresentados pelo estabelecimento no último mês de competência - Internação Hospitalar SUS (SIH)
QTD_TOTAL_INTERNACOES_ULTIMO_MES_SUS_SIH | int | Total de internações no último mês - Internação Hospitalar SUS (SIH) - Somatório das internações realizadas pelo estabelecimento no último mês de competência - - Internação Hospitalar SUS (SIH)
VALOR_TOTAL_PROCEDIMENTOS_ULTIMO_MES_SUS_SIH | numeric | Valor total de procedimentos no último mês - Somatório do valor total de procedimentos apresentado pelo estabelecimento
ATEND_AMBULATORIAL_SUS_SIH_PROCEDIMENTO | string | Procedimento - Descrição do procedimento
ATEND_AMBULATORIAL_SUS_SIH_CODIGO | string | Código - Código do procedimento
ATEND_AMBULATORIAL_SUS_SIH_QTD_INTERNACOES | string | Quantidade de internações último mês - Quantidade de internação por procedimento apresentado no último mês de comprtência
ATEND_AMBULATORIAL_SUS_SIH_QTD_PROCEDIMENTOS | string | Quantidade de procedimentos último mês - Quantidade de procedimentos apresentados no último mês de competência
ATEND_AMBULATORIAL_SUS_SIH_VALOR_PROCEDIMENTO | string | Valor procedimentos último mês - Valor dos procedimentos apresentados no último mês de competência
