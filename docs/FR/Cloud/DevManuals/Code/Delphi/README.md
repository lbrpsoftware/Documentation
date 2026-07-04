# Exemples de code: Delphi

## 1. Enums

```pascal
type TCountryEnum = (
    BE = 0,
    AT = 12,
    BG = 22,
    CY = 55,
    CZ = 56,
    DE = 57,
    DK = 59,
    EE = 64,
    ES = 68,
    FI = 70,
    FR = 75,
    GB = 77,
    HR = 97,
    HU = 99,
    IE = 101,
    IT = 109,
    LT = 132,
    LU = 133,
    LV = 134,
    MT = 152,
    NL = 165,
    PL = 178,
    PT = 183,
    RO = 188,
    SE = 196,
    SI = 199,
    SK = 201,
    EL = 251
);
```

```pascal
type TCultureKindEnum = (
    cukDefault = 0,
    cukEnglish = 1,
    cukNederlands = 2,
    cukFrancais = 4,
    cukDeutsch = 8,
    cukItaliano = 16,
    cukEspagnol = 32
);
```

```pascal
type
 TFileExtEnum = (
    fexNone = 0,
    fexXml = 1,
    fexPdf = 2,
    fexCod = 4,
    fexPng = 8,
    fexJpg = 16,
    fexJpeg = 32
);
```

```pascal
type
  TApplicationType = Int64;

const
  appFod: TApplicationType = 524288;
```

```pascal
type TPaymentTypeEnum = (
    payViva = 1,
    payStripe = 2,
    payBraintree = 4,
    payAppStore = 8,
    payPlayStore = 16,
    payBitPay = 32,
    payPayPal = 64,
    payBank = 128
);
```

```pascal
type
  TPlanTypeEnum = (
    planFree = 1,
    planBasic = 2,
    planTeam = 4,
    planEnterprise = 8
);
```

```pascal
type
  TRoleType = (
    roleOwner = 1,
    roleAdministrator = 2,
    roleManager = 4,
    roleEditor = 8,
    roleViewer = 16,
    roleCustomer = 32
);
```

```pascal
type
  TFodDocumentStateEnum = (
    fdsNone = 0,
    fdsPaid = 1
);
```

```pascal
type
  TFodInterVatTypeEnum = (
    ivtNone = 0,
    ivtVatConsignment = 1
);
```

```pascal
type
  TFodOwnerTypeEnum = (
    fotNone = 0,
    fotNationalNr = 1,
    fotRegNumber = 2
);
```

```pascal
type
  TFodInterVatStateEnum = (
    ivsPending = 0,
    ivsCreated = 1,
    ivsError = 2
);
```

## 2. Classes

### 2.1. Base Contracts

#### 2.1.1 Types

```pascal
type
  TBaseResponse = class(TJsonDTO)
  private
    [JSONName('identity')]     FIdentity: TGuid;
    [JSONName('id')]           FID: Integer;
    [JSONName('lastModified')] FLastModified: TDateTime;
    [JSONName('created')]      FCreated: TDateTime;
  public
    property Identity: TGuid read FIdentity write FIdentity;
    property ID: Integer read FID write FID;
    property LastModified: TDateTime read FLastModified write FLastModified;
    property Created: TDateTime read FCreated write FCreated;
  end;
```

```pascal
type
  TAuthenticationSuccessResponse = class(TJsonDTO)
  private
    [JSONName('token')]        FToken: string;
    [JSONName('refreshToken')] FRefreshToken: string;
  public
    property Token: string read FToken write FToken;
    property RefreshToken: string read FRefreshToken write FRefreshToken;
  end;
```

```pascal
type
  TGeneralFailResponse = class(TJsonDTO)
  private
    [JSONName('errors')] FErrors: TArray<string>;
    [JSONName('statusCode')] FStatusCode: Integer;
  public
    property Errors: TArray<string> read FErrors write FErrors;
    property StatusCode: Integer read FStatusCode write FStatusCode;
    function ToMemoString: string;
  end;
```

```pascal
type
  TGeneralSuccessResponse = class(TJsonDTO)
  private
    [JSONName('messages')] FMessages: TArray<string>;
  public
    property Messages: TArray<string> read FMessages write FMessages;
    function ToMemoString: string;
  end;
```

```pascal
type
  TGeneralCombinedResponse = class(TJsonDTO)
  private
    [JSONName('failures')]  FFailures: TArray<TGeneralFailResponse>;
    [JSONName('successes')] FSuccesses: TArray<TGeneralSuccessResponse>;
  public
    property Failures: TArray<TGeneralFailResponse> read FFailures write FFailures;
    property Successes: TArray<TGeneralSuccessResponse> read FSuccesses write FSuccesses;
    function HasFailures: boolean;
    function ToMemoString(AddHeader: Boolean = True; OnlyFailures: Boolean = False): string;
  end;
```

```pascal
type
  TPagedResponse<T: TJsonDTO, constructor> = class(TJsonDTO)
  private
    [JSONName('pageNumber')]      FPageNumber: Integer;
    [JSONName('pageSize')]        FPageSize: Integer;
    [JSONName('count')]           FCount: Integer;
    [JSONName('hasNextPage')]     FHasNextPage: Boolean;
    [JSONName('hasPreviousPage')] FHasPreviousPage: Boolean;

    [JSONName('data'), JSONMarshalled(False)]
    FItemsArray: TArray<T>;
    [GenericListReflect]
    FItems: TObjectList<T>;
    function GetItems: TObjectList<T>;
  protected
  public
    function GetAsJson: string; override;

    property PageNumber: Integer read FPageNumber write FPageNumber;
    property PageSize: Integer read FPageSize write FPageSize;
    property Count: Integer read FCount write FCount;
    property HasNextPage: Boolean read FHasNextPage write FHasNextPage;
    property HasPreviousPage: Boolean read FHasPreviousPage write FHasPreviousPage;

    property Items: TObjectList<T> read GetItems;
    destructor Destroy; override;
  end;
```

```pascal
type
  TFileRequest = class(TJsonDTO)
  private
    [JSONName('fileName')]    FFileName: string;
    [JSONName('contentType')] FContentType: TRESTContentType;
  public
    property FileName: string read FFileName write FFileName;
    property ContentType: TRESTContentType read FContentType write FContentType;
  end;

type
  TFilesRequest = class(TJsonDTO)
  private
    [JSONName('files')] FFiles: TArray<TFileRequest>;
  public
    property Files: TArray<TFileRequest> read FFiles write FFiles;
  end;
```

```pascal
type
  TFileResponse = class(TJsonDTO)
  private
    [JSONName('fileName')]    FFileName: string;
    [JSONName('contentType')] FContentType: TRESTContentType;
    [JSONName('fileContent')] FFileContent: string; // base64-encoded
  public
    property FileName: string read FFileName write FFileName;
    property ContentType: TRESTContentType read FContentType write FContentType;
    property FileContent: string read FFileContent write FFileContent;

    function SaveToFolder(const AFolder: string; var Err: string): Boolean;
  end;
```

#### 2.1.2 Functions

```pascal
function TYourMod.GetGeneralResponse(Response: TRESTResponse): TOneOf<TGeneralFailResponse, TGeneralSuccessResponse>;
var
  F: TGeneralFailResponse;
  O: TGeneralSuccessResponse;
begin

  if (not Response.Status.Success) then
  begin
    F := GeneralFailResponse(Response);
    Result := TOneOf<TGeneralFailResponse, TGeneralSuccessResponse>.From(F);
  end
  else
  begin
    O := TGeneralSuccessResponse.Create;
    O.AsJson := Response.Content;
    Result := TOneOf<TGeneralFailResponse, TGeneralSuccessResponse>.From(O);
  end;

end;

function TYourMod.GetGeneralCombinedResponse(Response: TRESTResponse): TOneOf<TGeneralFailResponse, TGeneralCombinedResponse>;
var
  F: TGeneralFailResponse;
  O: TGeneralCombinedResponse;
begin

  if (not Response.Status.Success) then
  begin
    F := GeneralFailResponse(Response);
    Result := TOneOf<TGeneralFailResponse, TGeneralCombinedResponse>.From(F);
  end
  else
  begin
    O := TGeneralCombinedResponse.Create;
    O.AsJson := Response.Content;
    Result := TOneOf<TGeneralFailResponse, TGeneralCombinedResponse>.From(O);
  end;

end;

function TYourMod.GetAuthenticationResponse(Response: TRESTResponse; SetCurrentTokens: Boolean = True): TOneOf<TGeneralFailResponse, TAuthenticationSuccessResponse>;
var
  F: TGeneralFailResponse;
  O: TAuthenticationSuccessResponse;
begin

  if (SetCurrentTokens) then
  begin
    m_AccessToken := '';
    m_RefreshToken := '';
  end;
  try
    if (not Response.Status.Success) then
    begin
      F := GeneralFailResponse(Response);
      Result := TOneOf<TGeneralFailResponse, TAuthenticationSuccessResponse>.From(F);
    end
    else
    begin
      O := TAuthenticationSuccessResponse.Create;
      O.AsJson := Response.Content;
      Result := TOneOf<TGeneralFailResponse, TAuthenticationSuccessResponse>.From(O);
    end;
  finally
    if (Result.IsOkay and SetCurrentTokens) then
    begin
      m_AccessToken := Result.AsOkay.Token;
      m_RefreshToken := Result.AsOkay.RefreshToken;
    end;
  end;

end;

function TYourMod.GeneralFailResponse(Response: TRESTResponse): TGeneralFailResponse;
var
  R: TGeneralFailResponse;
begin

  R := TGeneralFailResponse.Create;
  try
    if (not Response.Status.ClientErrorBadRequest_400) then
      R.Errors := [Response.StatusCode.ToString, Response.ErrorMessage]
    else
      R.AsJson := Response.Content;
  finally
    m_LastError := string.Join(', ', R.Errors);
    Result := R;
  end;

end;

function TYourMod.GetPagedResponse<T>(Response: TRESTResponse): TOneOf<TGeneralFailResponse, TPagedResponse<T>>;
var
  F: TGeneralFailResponse;
  O: TPagedResponse<T>;
begin

  if (not Response.Status.Success) then
  begin
    F := GeneralFailResponse(Response);
    Result := TOneOf<TGeneralFailResponse, TPagedResponse<T>>.From(F);
  end
  else
  begin
    O := TPagedResponse<T>.Create;
    O.SetAsJson(Response.Content);
    Result := TOneOf<TGeneralFailResponse, TPagedResponse<T>>.From(O);
  end;

end;

function TYourMod.GetResponse<T>(Response: TRESTResponse): TOneOf<TGeneralFailResponse, T>;
var
  F: TGeneralFailResponse;
  O: T;
begin

  if (not Response.Status.Success) then
  begin
    F := GeneralFailResponse(Response);
    Result := TOneOf<TGeneralFailResponse, T>.From(F);
  end
  else
  begin
    O := T.Create;
    O.AsJson := Response.Content;
    Result := TOneOf<TGeneralFailResponse, T>.From(O);
  end;

end;

function TYourMod.GetListResponse<T>(Response: TRESTResponse): TOneOf<TGeneralFailResponse, TList<T>>;
var
  F: TGeneralFailResponse;
  O: TList<T>;
begin

  if (not Response.Status.Success) then
  begin
    F := GeneralFailResponse(Response);
    Result := TOneOf<TGeneralFailResponse, TList<T>>.From(F);
  end
  else
  begin
    O := REST.Json.TJson.JsonToObject<TList<T>>(Response.Content);
    Result := TOneOf<TGeneralFailResponse, TList<T>>.From(O);
  end;

end;
```

### 2.2 Identity Contracts

```pascal
type
  TRegisterRequest = class(TJsonDTO)
  private
    [JSONName('email')]    FEmail: string;
    [JSONName('password')] FPassword: string;
    [JSONName('language')] FLanguage: Integer;
    function GetLanguage: TCultureKindEnum;
    procedure SetLanguage(const Value: TCultureKindEnum);
  public
    property Email: string read FEmail write FEmail;
    property Password: string read FPassword write FPassword;
    property Language: TCultureKindEnum read GetLanguage write SetLanguage;
  end;
```

```pascal
type
  TLoginRequest = class(TJsonDTO)
  private
    [JSONName('email')]    FEmail: string;
    [JSONName('password')] FPassword: string;
  public
    property Email: string read FEmail write FEmail;
    property Password: string read FPassword write FPassword;
  end;
```

```pascal
type
  TRefreshRequest = class(TJsonDTO)
  private
    [JSONName('token')]        FToken: string;
    [JSONName('refreshToken')] FRefreshToken: string;
  public
    property Token: string read FToken write FToken;
    property RefreshToken: string read FRefreshToken write FRefreshToken;
  end;
```

### 2.3 Organisaties/Applicaties Contracts

```pascal
type
  TOrganization = class(TBaseResponse)
  private
    [JSONName('name')]              FName: string;
    [JSONName('vatNumber')]         FVatNumber: string;
    [JSONName('regNumber')]         FRegNumber: string;
    [JSONName('isOwner')]           FIsOwner: Boolean;
    [JSONName('email')]             FEmail: string;
    [JSONName('businessStreet')]    FBusinessStreet: string;
    [JSONName('businessNumber')]    FBusinessNumber: string;
    [JSONName('businessBus')]       FBusinessBus: string;
    [JSONName('businessZipCode')]   FBusinessZipCode: string;
    [JSONName('businessCity')]      FBusinessCity: string;
    [JSONName('businessDistrict')]  FBusinessDistrict: string;
    [JSONName('businessRegion')]    FBusinessRegion: string;
    [JSONName('businessCountry')]   FBusinessCountry: Integer; // TCountryEnum
    [JSONName('invoiceIsBusiness')] FInvoiceIsBusiness: Boolean;
    [JSONName('invoiceStreet')]     FInvoiceStreet: string;
    [JSONName('invoiceNumber')]     FInvoiceNumber: string;
    [JSONName('invoiceBus')]        FInvoiceBus: string;
    [JSONName('invoiceZipCode')]    FInvoiceZipCode: string;
    [JSONName('invoiceCity')]       FInvoiceCity: string;
    [JSONName('invoiceDistrict')]   FInvoiceDistrict: string;
    [JSONName('invoiceRegion')]     FInvoiceRegion: string;
    [JSONName('invoiceCountry')]    FInvoiceCountry: Integer; // TCountryEnum
    [JSONName('paymentType')]       FPaymentType: Integer;    // TPaymentTypeEnum
    [JSONName('planType')]          FPlanType: Integer;       // TPlanTypeEnum
    [JSONName('enabled')]           FEnabled: Boolean;
    function GetBusinessCountry: TCountryEnum;
    procedure SetBusinessCountry(const Value: TCountryEnum);
    function GetInvoiceCountry: TCountryEnum;
    procedure SetInvoiceCountry(const Value: TCountryEnum);
    function GetPaymentType: TPaymentTypeEnum;
    procedure SetPaymentType(const Value: TPaymentTypeEnum);
    function GetPlanType: TPlanTypeEnum;
    procedure SetPlanType(const Value: TPlanTypeEnum);
  public
    property Name: string read FName write FName;
    property VatNumber: string read FVatNumber write FVatNumber;
    property RegNumber: string read FRegNumber write FRegNumber;
    property IsOwner: Boolean read FIsOwner write FIsOwner;
    property Email: string read FEmail write FEmail;
    property BusinessStreet: string read FBusinessStreet write FBusinessStreet;
    property BusinessNumber: string read FBusinessNumber write FBusinessNumber;
    property BusinessBus: string read FBusinessBus write FBusinessBus;
    property BusinessZipCode: string read FBusinessZipCode write FBusinessZipCode;
    property BusinessCity: string read FBusinessCity write FBusinessCity;
    property BusinessDistrict: string read FBusinessDistrict write FBusinessDistrict;
    property BusinessRegion: string read FBusinessRegion write FBusinessRegion;
    property BusinessCountry: TCountryEnum read GetBusinessCountry write SetBusinessCountry;
    property InvoiceIsBusiness: Boolean read FInvoiceIsBusiness write FInvoiceIsBusiness;
    property InvoiceStreet: string read FInvoiceStreet write FInvoiceStreet;
    property InvoiceNumber: string read FInvoiceNumber write FInvoiceNumber;
    property InvoiceBus: string read FInvoiceBus write FInvoiceBus;
    property InvoiceZipCode: string read FInvoiceZipCode write FInvoiceZipCode;
    property InvoiceCity: string read FInvoiceCity write FInvoiceCity;
    property InvoiceDistrict: string read FInvoiceDistrict write FInvoiceDistrict;
    property InvoiceRegion: string read FInvoiceRegion write FInvoiceRegion;
    property InvoiceCountry: TCountryEnum read GetInvoiceCountry write SetInvoiceCountry;
    property PaymentType: TPaymentTypeEnum read GetPaymentType write SetPaymentType;
    property PlanType: TPlanTypeEnum read GetPlanType write SetPlanType;
    property Enabled: Boolean read FEnabled write FEnabled;
  end;
```

```pascal
type
  TApplication = class(TBaseResponse)
  private
    [JSONName('applicationType')] FApplicationType: Int64; // TApplicationTypeEnum
    [JSONName('enabled')]         FEnabled: Boolean;
    function GetApplicationType:  TApplicationType;
    procedure SetApplicationType(const Value: TApplicationType);
  public
    property ApplicationType: TApplicationType read GetApplicationType write SetApplicationType;
    property Enabled: Boolean read FEnabled write FEnabled;
  end;
```

```pascal
type
  TSetting = class(TBaseResponse)
  private
    [JSONName('userId')] FUserId: string;
    [JSONName('level')]  FLevel: Integer; // TSettingLevelEnum
    [JSONName('code')]   FCode: Integer;  // TSettingCodeEnum
    [JSONName('value')]  FValue: string;
    function GetSettingLevel: TSettingLevelEnum;
    procedure SetSettingLevel(const Value: TSettingLevelEnum);
    function GetSettingCode: TSettingCodeEnum;
    procedure SetSettingCode(const Value: TSettingCodeEnum);
  public
    property UserId: string read FUserId write FUserId;
    property Level: TSettingLevelEnum read GetSettingLevel write SetSettingLevel;
    property Code: TSettingCodeEnum read GetSettingCode write SetSettingCode;
    property Value: string read FValue write FValue;
  end;
```
### 2.4 FOD Contracts

```pascal
type
  TFodDocument = class(TBaseResponse)
  private
    [JSONName('externalId')]    FExternalId: TGuid;
    [JSONName('ownerType')]     FOwnerType: Integer; // TFodOwnerTypeEnum
    [JSONName('ownerValue')]    FOwnerValue: string;
    [JSONName('format')]        FFormat: Integer;   // TFileExtEnum
    [JSONName('documentType')]  FDocumentType: string;
    [JSONName('fileName')]      FFileName: string;
    [JSONName('fileCreated')]   FFileCreated: TDateTime;
    [JSONName('state')]         FState: Integer;   // TFodDocumentStateEnum
    [JSONName('processed')]     FProcessed: Boolean;
    function GetOwnerType: TFodOwnerTypeEnum;
    procedure SetOwnerType(const Value: TFodOwnerTypeEnum);
    function GetFormat: TFileExtEnum;
    procedure SetFormat(const Value: TFileExtEnum);
    function GetState: TFodDocumentStateEnum;
    procedure SetState(const Value: TFodDocumentStateEnum);
  public
    property ExternalId: TGuid read FExternalId write FExternalId;
    property OwnerType: TFodOwnerTypeEnum read GetOwnerType write SetOwnerType;
    property OwnerValue: string read FOwnerValue write FOwnerValue;
    property Format: TFileExtEnum read GetFormat write SetFormat;
    property DocumentType: string read FDocumentType write FDocumentType;
    property FileName: string read FFileName write FFileName;
    property FileCreated: TDateTime read FFileCreated write FFileCreated;
    property State: TFodDocumentStateEnum read GetState write SetState;
    property Processed: Boolean read FProcessed write FProcessed;
  end;
```

```pascal
type
  TFodInterVat = class(TBaseResponse)
  private
    [JSONName('externalXmlId')] FExternalXmlId: TGuid;
    [JSONName('externalPdfId')] FExternalPdfId: TGuid;
    [JSONName('format')]        FFormat: Integer;        // TFileExtEnum
    [JSONName('documentType')]  FDocumentType: Integer;  // TFodInterVatTypeEnum
    [JSONName('documentState')] FDocumentState: Integer; // TFodInterVatStateEnum
    [JSONName('fileName')]      FFileName: string;
    [JSONName('documentDate')]  FDocumentDate: TDateTime;
    [JSONName('remark')]        FRemark: string;
    function GetFormat: TFileExtEnum;
    procedure SetFormat(const Value: TFileExtEnum);
    function GetType: TFodInterVatTypeEnum;
    procedure SetType(const Value: TFodInterVatTypeEnum);
    function GetState: TFodInterVatStateEnum;
    procedure SetState(const Value: TFodInterVatStateEnum);
  public
    property ExternalXmlId: TGuid read FExternalXmlId write FExternalXmlId;
    property ExternalPdfId: TGuid read FExternalPdfId write FExternalPdfId;
    property Format: TFileExtEnum read GetFormat write SetFormat;
    property DocumentType: TFodInterVatTypeEnum read GetType write SetType;
    property DocumentState: TFodInterVatStateEnum read GetState write SetState;
    property FileName: string read FFileName write FFileName;
    property DocumentDate: TDateTime read FDocumentDate write FDocumentDate;
    property Remark: string read FRemark write FRemark;
  end;
```

## 3 Functions

```pascal
function ApplicationTypeToString(AType: TApplicationType): string;
function StringToCountryEnum(AValue: string): TCountryEnum;
function CountryEnumToString(ACountry: TCountryEnum): string;
function SettingCodeEnumToString(ASettingCode: TSettingCodeEnum): string;
function FileExtToString(AType: TFileExtEnum): string;
function FodDocumentOwnerTypeToString(AType: TFodOwnerTypeEnum): string;
function FodDocumentStateToString(AType: TFodDocumentStateEnum): string;
function FodInterVatStateToString(AType: TFodInterVatStateEnum): string;
function FodInterVatTypeToString(AType: TFodInterVatTypeEnum): string;
function GuidToString(Value: TGuid): string;
function StringToGuid(Value: string): TGuid;
```

## 4 Header Example

```pascal
FRESTParams.CustomParams.Clear;
FRESTParams.CustomParams.AddItem('X-Version', '1.0', pkHTTPHEADER, []);
FRESTParams.CustomParams.AddItem('X-Api-Key', C_API_KEY, pkHTTPHEADER, []);
FRESTParams.CustomParams.AddItem('X-Legacy', Legacy, pkHTTPHEADER, []);
FRESTParams.CustomParams.AddItem('Authorization', 'Bearer ' + m_AccessToken, pkHTTPHEADER, [poDoNotEncode]);
FRESTParams.CustomParams.AddItem('Organization', GuidToString(m_Organization), pkHTTPHEADER, []);
```

## 5 TOneOf

`TOneOf<TFail, TOkay>` est un enregistrement générique pouvant contenir l'une de deux valeurs possibles : une **valeur d'erreur** (`TFail`) ou une **valeur de succès** (`TOkay`). Ce patron est utilisé comme alternative au lancement d'exceptions lors des appels API — au lieu de lever une exception en cas d'échec, la fonction retourne un `TOneOf` contenant soit un `TGeneralFailResponse` (erreur), soit un type de succès.

Le champ interne `FIndex` indique quelle valeur est active :
- `0` → non défini
- `1` → `TFail` (erreur)
- `2` → `TOkay` (succès)

### Aperçu des méthodes

| Méthode | Description |
|---|---|
| `From(TFail)` | Crée un `TOneOf` avec une valeur d'erreur (`FIndex = 1`) |
| `From(TOkay)` | Crée un `TOneOf` avec une valeur de succès (`FIndex = 2`) |
| `IsFail` | Retourne `True` si la valeur est une erreur |
| `IsOkay` | Retourne `True` si la valeur est un succès |
| `IsSet` | Retourne `True` si une valeur est définie (erreur ou succès) |
| `AsFail` | Retourne la valeur d'erreur ; lève une exception si ce n'est pas une erreur |
| `AsOkay` | Retourne la valeur de succès ; lève une exception si ce n'est pas un succès |
| `TryGetFail` | Variante sécurisée de `AsFail` — retourne `False` si ce n'est pas une erreur |
| `TryGetOkay` | Variante sécurisée de `AsOkay` — retourne `False` si ce n'est pas un succès |

### Utilisation en pratique

Après un appel API, vérifiez le résultat comme suit :

```pascal
var
  Result: TOneOf<TGeneralFailResponse, TGeneralSuccessResponse>;
begin
  Result := GetGeneralResponse(Response);

  if Result.IsFail then
    ShowMessage('Erreur : ' + string.Join(', ', Result.AsFail.Errors))
  else
    ShowMessage('Succès : ' + string.Join(', ', Result.AsOkay.Messages));
end;
```

Ou avec les variantes sécurisées `TryGet` :

```pascal
var
  Result: TOneOf<TGeneralFailResponse, TGeneralSuccessResponse>;
  Fail: TGeneralFailResponse;
  Okay: TGeneralSuccessResponse;
begin
  Result := GetGeneralResponse(Response);

  if Result.TryGetFail(Fail) then
    ShowMessage('Erreur : ' + string.Join(', ', Fail.Errors))
  else if Result.TryGetOkay(Okay) then
    ShowMessage('Succès : ' + string.Join(', ', Okay.Messages));
end;
```

### Définition du type & implémentation

```pascal
type
  TOneOf<TFail, TOkay> = record
  private
    FFailValue: TFail;
    FOkayValue: TOkay;
    FIndex: Integer; // 1 for TFail, 2 for TOkay, 0 for unset
  public
    class function From(const Value: TFail): TOneOf<TFail, TOkay>; overload; static;
    class function From(const Value: TOkay): TOneOf<TFail, TOkay>; overload; static;
    function IsFail: Boolean;
    function IsOkay: Boolean;
    function IsSet: Boolean;
    function AsFail: TFail;
    function AsOkay: TOkay;
    function TryGetFail(out Value: TFail): Boolean;
    function TryGetOkay(out Value: TOkay): Boolean;
  end;

class function TOneOf<TFail, TOkay>.From(const Value: TFail): TOneOf<TFail, TOkay>;
begin
  Result.FFailValue := Value;
  Result.FIndex := 1;
end;

class function TOneOf<TFail, TOkay>.From(const Value: TOkay): TOneOf<TFail, TOkay>;
begin
  Result.FOkayValue := Value;
  Result.FIndex := 2;
end;

function TOneOf<TFail, TOkay>.IsFail: Boolean;
begin
  Result := FIndex = 1;
end;

function TOneOf<TFail, TOkay>.IsOkay: Boolean;
begin
  Result := FIndex = 2;
end;

function TOneOf<TFail, TOkay>.IsSet: Boolean;
begin
  Result := FIndex > 0;
end;

function TOneOf<TFail, TOkay>.AsFail: TFail;
begin
  if FIndex <> 1 then
    raise Exception.Create('Value is not of type TFail');
  Result := FFailValue;
end;

function TOneOf<TFail, TOkay>.AsOkay: TOkay;
begin
  if FIndex <> 2 then
    raise Exception.Create('Value is not of type TOkay');
  Result := FOkayValue;
end;

function TOneOf<TFail, TOkay>.TryGetFail(out Value: TFail): Boolean;
begin
  Result := FIndex = 1;
  if Result then
    Value := FFailValue;
end;

function TOneOf<TFail, TOkay>.TryGetOkay(out Value: TOkay): Boolean;
begin
  Result := FIndex = 2;
  if Result then
    Value := FOkayValue;
end;
```