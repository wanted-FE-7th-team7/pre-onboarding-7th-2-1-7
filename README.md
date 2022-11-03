
# **team7-week2-1**

원티드 프론트엔드 프리온보딩 7차 7팀 2-1 과제 레포리토리입니다

### **배포 주소**

[https://wanted-fe-7th-team7.github.io/pre-onboarding-7th-2-1-7/cars](https://wanted-fe-7th-team7.github.io/pre-onboarding-7th-2-1-7/cars)

### **폴더구조**

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜api.ts
 ┣ 📂components
 ┃ ┣ 📂UIs
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┣ 📜HeaderBar.tsx
 ┃ ┃ ┣ 📜IconBack.tsx
 ┃ ┃ ┣ 📜Image.tsx
 ┃ ┃ ┣ 📜ListHeader.tsx
 ┃ ┃ ┣ 📜ListItem.tsx
 ┃ ┃ ┣ 📜StyledText.tsx
 ┃ ┃ ┗ 📜Tag.tsx
 ┃ ┣ 📜CarList.tsx
 ┃ ┣ 📜DetailName.tsx
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┣ 📜MetaTag.tsx
 ┃ ┗ 📜NoData.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useFetch.ts
 ┣ 📂interfaces
 ┃ ┗ 📜Cars.ts
 ┣ 📂pages
 ┃ ┣ 📜DetailPage.tsx
 ┃ ┗ 📜ListPage.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┣ 📜Layout.tsx
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┣ 📜isNewCarItem.ts
 ┃ ┣ 📜time.ts
 ┃ ┗ 📜variables.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

1. apis : api 통신 함수 관리
2. components : 프로젝트에서 사용되는 컴포넌트 관리
    1. UIs: 공통으로 사용되는 UI 컴포넌트 관리
3. hooks : 공통으로 사용되는 hooks 관리
4. interfaces : 공통으로 사용되는 interface 관리
5. pages : 페이지 단위 컴포넌트 폴더
6. styles: 공통으로 사용되는 스타일 관리
7. utils : 공통으로 사용되는 기타 함수 관리

### **API**

```tsx
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getCars = async (selectedType: string) => {
  const url = types[selectedType];
  const res = await http.get(url);
  return res.data.payload;
};

const types: Types = {
  전체: `/api/cars`,
  대형: `/api/cars?segment=${'E'}`,
  중형: `/api/cars?segment=${'D'}`,
  소형: `/api/cars?segment=${'C'}`,
  전기: `/api/cars?fuelType=${'ev'}`,
};

interface Types {
  [index: string]: string;
}
```

- API의 엔드포인트가 1개라서 그에 맞게 깔끔하게 코드를 작성함.
- 사용되는 types의 경우 Object 형식으로 관리함.
- types는 키 값을 카테고리의 각 태그 라벨과 일치시켜 별다른 변환 과정없이 불러오도록 작성함.

### **로딩 / 에러 처리**

```tsx
function useFetch(
  setState: Dispatch<SetStateAction<Cars[]>>,
  selectedType: string
) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const data = await getCars(selectedType);
        setState([...data]);
      } catch (error) {
        setErrors(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, [setState, selectedType]);

  return [isLoading, errors];
}

export default useFetch;
```

- `useFetch` hook 을 만들어 서버와 통신하는 과정에서 발생하는 로딩과 에러를 관리함.
- 이렇게 관리된 state는 아래 코드처럼 분기를 나눠 로딩과 에러가 발생했을 때 어떻게 동작하는지 한 눈에 알아볼 수 있도록 작성함.
    - 자세한 내용은 ListPage 참고.

### ListPage

`useFetch` hook 을 이용해 데이터 로딩 상태에 따라 `isLoading` 을 리턴합니다.

```tsx
function useFetch(
  setState: Dispatch<SetStateAction<Cars[]>>,
  selectedType: string
) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const data = await getCars(selectedType);
        setState([...data]);
      } catch (error) {
        setErrors(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, [setState, selectedType]);

  return [isLoading, errors];
}
```

- 차량 없을 때 처리

```tsx
const [isLoading, errors] = useFetch(setCars, selectedType);
const isEmpty = !isLoading && cars.length === 0;
{isEmpty && <NoData />}
```

- 차량 불러오는 중 처리

```tsx
const [isLoading, errors] = useFetch(setCars, selectedType);
{isLoading && <Loading />}
```

- 차량 리스트

```tsx
const [cars, setCars] = useState<Cars[]>([]);
const [isLoading, errors] = useFetch(setCars, selectedType);
const isEmpty = !isLoading && cars.length === 0;
const hasCarList = !isLoading && cars.length > 0;

// ... 생략

{hasCarList && <CarList cars={cars} />}
```

### Header

```tsx
function HeaderBar({ title }: Props) {
  const navigate = useNavigate();
  return (
    <StyledHeaderBar>
      {title === '차량상세' ? (
        <div className="ICON_back" onClick={() => navigate(-1)}>
          <IconBack />
        </div>
      ) : (
        <div />
      )}
      {title}
      <div />
    </StyledHeaderBar>
  );
}
```

- `Hearder` 컴포넌트로 넘어오는 props를 이용해서 `DeatailPage`, `ListPage`인지 확인
- 삼항연산자를 이용해 간편하게 페이지마다 다른 렌더링할 수 있도록

### Category

- Click 시 selectedType state를 category 이름으로 변경
- 선택 되었는지 여부를 통해 버튼 Type 지정

```jsx
<Category selectedType={selectedType} setSelectedType={setSelectedType} />
//...
interface Props {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
}

function Category({ selectedType, setSelectedType }: Props) {
  return (
    <Wrapper>
      {CATEGORIES.map(category => (
        <Tag
          key={category}
          onClick={() => setSelectedType(category)}
          color={selectedType === category ? 'black' : 'gray'}
          placeholder={category}
        />
      ))}
    </Wrapper>
  );
}
```

### DetailPage

- useLocation()을 사용하여 원하는 정보를 가져와 화면에 보이도록 하였습니다

```tsx
function DetailPage() {
  const location = useLocation();
  if (!location.state) {
    return <Error />;
  }

  const { startDate, insurance, additionalProducts, amount } = location.state;
  const { brand, name, segment, fuelType, imageUrl } = location.state.attribute;

  return (
    <Layout>
      <MetaTag car={location.state} />
      <Wrapper>
        <HeaderBar title="차량상세" />
        <Image src={imageUrl} size="DETAIL_PAGE" />
        <DetailName brand={brand} name={name} amount={amount} />

        <ListHeader title="차량 정보" />
        <ListItem name="차종" title={SEGMENT[segment]} />
        <ListItem name="연료" title={FUEL_TYPE[fuelType]} />
        <ListItem name="이용 가능일" title={Time.parseStartDate(startDate)} />
        <ListHeader title="보험" />
        {insurance.map(({ name, description }: Insurance) => (
          <ListItem key={name} name={name} title={description} />
        ))}
        <ListHeader title="추가 상품" />
        {additionalProducts.map(({ name, amount }: AdditionalProducts) => (
          <ListItem
            key={name}
            name={name}
            title={`월 ${amount.toLocaleString()} 원`}
          />
        ))}
      </Wrapper>
    </Layout>
  );
}
```

### Styled-Components

```tsx
export const theme = {
  black: '#000000',
  gray: '#D9D9D9',
  blue: '#0094FF',
};

export const flex = (
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row'
) => {
  return `
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};`;
};

export const width = {
  sm: '360px',
  lg: '450px',
};

export const HEADER_HEIGHT = '6rem';
export const CATEGORY_HEIGHT = '4rem';
```

- 자주 사용하는 CSS는 미리 함수를 만들어 재사용 가능하도록 작성함.
- 특정 값을 나타내는 값의 경우 상수로 지정하여 어떤 값인지 명료하게 작성함.

```tsx
export const StyledTag = styled.button<StyledProps>`
  ${flex()}
  height: 2.7rem;
  padding: 0rem 1.8rem;
  margin: 0 0.4rem;
  flex-shrink: 0;

  ${({ color }) => COLOR_TYPE[color]}

  font-size: 1.4rem;
  appearance: none;
  border: none;
  border-radius: 6.2rem;
  cursor: pointer;
`;

const COLOR_TYPE: ColorType = {
  black: `
    background-color: #000000;
    color: #ffffff;
  `,
  blue: `
    background-color: #0094FF;
    color: #ffffff;
  `,
  gray: `
    background-color: #D9D9D9;
    color: #000000;
  `,
};
```

- 분기 처리가 필요한 부분의 경우, 해당 분기를 객체로 만들어 인자 값에 따라 특정 CSS를 반환할 수 있도록 처리.

### SEO 처리 (추가 구현 사항)

- `react-helmet-async` 라이브러리를 활용
- MetaTag 컴포넌트를 생성해주어 `DetailPage` 최상단에 차량 정보를 메타 태그에 할당
- 브라우져 Element 탭에서 메타 태그 확인 가능
- 배포, 공유 시 메타 태그 노출 미구현

```jsx
const MetaTag = ({ car }: Props) => {
  const {
    amount,
    attribute: { brand, name, imageUrl },
  } = car;

  const title = `${brand} - ${name}`;
  const description = '월' + amount.toLocaleString() + '원부터';
  const url = window.location.href;
  const keywords = '알티모빌리티';

  return (
    car && (
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="canonical" href={url} />
      </Helmet>
    )
  );
};

export default MetaTag;
```

### Git convention

| Tag Name | Description |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Fix | 에러 수정 |
| Docs | 문서 수정 |
| Style | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| Refactor | 코드 리팩토링 |
| Test | 테스트 추가, 테스트 리팩토링 |
| Chore | 빌드 업무 수정, 패키지 매니저 수정 |
