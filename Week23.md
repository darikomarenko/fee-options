# Week23
1. Какую ошибку я допустила в ~[этом](https://www.notion.so/1af2e007f13e4780aa33234330f361d7?pvs=21)~ примере? <button style={ myStyle }>. - нужны двойные скобки {{ myStyle }}
2. Какие есть способы работы со стилями в React? Можно вставить стили инлайн (не очень хорошая практика), можно импортировать стили из css файла и лучше разбить их на модули -  одноименные jsx и css файлы внутри одной папки, можно использовать препроцессоры. 
3. Как будет выглядеть карточка товара, если ей передать атрибут addedToCart===0? Будет отображаться компонент AddToCartButton.
4. Какие ещё проверки нужно было бы сделать для атрибута addedToCart? 
5. Клиент попросил повесить тег «New» на товары из новой коллекции. Как это сделать, какой условный оператор выбрать? Лучше выбрать логический оператор &&.
   Например:
   { onSale && <img src={onSale} alt={{Sale 15%}}/> }
6. Какими тремя способами можно написать условный рендеринг? С помощью if, логического или тернарного операторов. 
7. Представьте, что вы пишете компонент логина. Если пользователь авторизован, то мы показываем его имя, а если нет, то даём возможность ввода логина и пароля. Какой код для этого нужно написать, если за авторизацию пользователя отвечает флаг isAutorized?
   {isAuthorized ? <GreetUser isAuthorized={isAuthorized} /> : <LoginForm /> }
8. В чём преимущества использования препроцессоров? Какой ещё есть способ использовать переменные, кроме $ в препроцессорах?  Плюсы: можно классно организовать стили для большого проекта, можно использовать переменные, можно внутри sccss проворачивать математические операции, можно делать вложения, можно обращаться к свойствам родительского селектора по &, можно использовать миксины. 