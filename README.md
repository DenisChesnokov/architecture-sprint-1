# Mesto Microfrontend

Mesto - это веб-приложение для обмена фотографиями

## Структура проекта

Проект разделен на следующие микрофронтенды:

1. **Shell** - основное приложение, отвечающее за маршрутизацию и общую структуру.
2. **Auth** - компоненты для аутентификации и регистрации.
3. **Profile** - управление профилем пользователя.
4. **Cards** - отображение и управление карточками с фотографиями.
5. **Shared** - общие утилиты, контексты и компоненты.

## Компоненты и модули

### Shell
- `App.js` - основной компонент приложения
- `Header.js`, `Footer.js` - общие компоненты
- `ProtectedRoute.js` - компонент для защиты маршрутов

### Auth
- `Login.js`, `Register.js` - компоненты для входа и регистрации

### Profile
- `ProfileContainer.js` - контейнер для управления профилем
- `EditProfilePopup.js`, `EditAvatarPopup.js` - попапы для редактирования профиля

### Cards
- `CardsContainer.js` - контейнер для управления карточками
- `Card.js` - компонент отдельной карточки
- `AddPlacePopup.js` - попап для добавления новой карточки

### Shared
- `CurrentUserContext.js` - контекст для хранения информации о текущем пользователе
- `api.js` - утилиты для работы с API

## Обоснование архитектурного решения

Для декомпозиции фронтенда проекта Mesto я бы рекомендовал использовать подход Webpack Module Federation. Вот обоснование этого выбора:

- Интеграция с существующим стеком. Проект уже использует React и, вероятно, Webpack (так как использует create-react-app). Module Federation легко интегрируется с этим стеком технологий.
- Гибкость и независимость разработки. Module Federation позволяет каждой команде разрабатывать свою часть приложения как отдельное приложение, с собственными зависимостями и конфигурацией сборки.
- Совместное использование зависимостей. Можно легко настроить общие зависимости (например, React), что уменьшит дублирование кода и улучшит производительность.
- Меньше накладных расходов. По сравнению с Single SPA, Module Federation имеет меньше накладных расходов в плане дополнительных абстракций и настроек.
- Более нативный опыт разработки. Разработчики могут продолжать использовать привычные инструменты и процессы разработки React-приложений.

В то время как Single SPA предоставляет более универсальное решение для интеграции различных фреймворков, Module Federation лучше подходит для проектов, основанных на React, каким является Mesto. Это позволит сохранить текущий опыт разработки, минимизировать изменения в существующем коде и обеспечить плавный переход к микрофронтенд архитектуре.

Обоснование выбора микрофорнтендов:

- Auth Microfrontend может быть переиспользован в других проектах компании.
- Profile и Cards Microfrontends могут масштабироваться и развиваться независимо друг от друга.
- Shell Microfrontend обеспечивает общую структуру и интеграцию всех частей.
- Shared Microfrontend позволяет избежать дублирования кода и обеспечивает единообразие в работе с API и общим состоянием.
- Каждый микрофронтенд представляет собой логически связанный блок функциональности.
- Такое разделение позволяет разным командам работать над различными аспектами приложения независимо.