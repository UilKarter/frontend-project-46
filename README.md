### Hexlet tests and linter status:
[![Actions Status](https://github.com/UilKarter/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/UilKarter/frontend-project-46/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=UilKarter_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=UilKarter_frontend-project-46)
[![Build](https://github.com/UilKarter/frontend-project-46/actions/workflows/build.yml/badge.svg)](https://github.com/UilKarter/frontend-project-46/actions/workflows/build.yml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=UilKarter_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=UilKarter_frontend-project-46)

## Установка
1. Клонируйте репозиторий:
   git clone https://github.com/UilKarter/frontend-project-46.git

2. Перейдите в директорию проекта:
   cd frontend-project-46

3. Установите зависимости:
   make install
   (или npm install)

4. Установите пакет глобально (для запуска программы из любой папки):
   npm link
   (на некоторых системах может потребоваться sudo npm link)
5. Проверьте установку, получив справку:
   введите gendiff -h

## Использование
   После установки команда gendiff будет доступна в терминале:
   ```bash
    # Вывести справку
    gendiff -h

    # Показать версию
    gendiff -V

    # Сравнить два JSON файла (формат stylish по умолчанию)
    gendiff __fixtures__/file1.json __fixtures__/file2.json

    # Сравнить с форматом plain
    gendiff __fixtures__/file1.json __fixtures__/file2.json -f plain

    # Сравнить с форматом json
    gendiff __fixtures__/file1.json __fixtures__/file2.json -f json

    # Сравнить YAML файлы
    gendiff __fixtures__/file1.yaml __fixtures__/file2.yaml

    # Сравнить файлы разных форматов
    gendiff __fixtures__/file1.json __fixtures__/file2.yaml
    ```
## Примеры работы:
### Сравнение двух JSON-файлов:
[![asciicast](https://asciinema.org/a/iwoP8xzV9AlycEy3.svg)](https://asciinema.org/a/iwoP8xzV9AlycEy3)
### Сравнение двух YAML/YML-файлов:
[![asciicast](https://asciinema.org/a/WVpp5jF6cXfYyUvi.svg)](https://asciinema.org/a/WVpp5jF6cXfYyUvi)
### Сравнение с форматом "stylish":
[![asciicast](https://asciinema.org/a/l2yUfeFfSBZ0WB6y.svg)](https://asciinema.org/a/l2yUfeFfSBZ0WB6y)
### Сравнение с форматом "plain":
[![asciicast](https://asciinema.org/a/Xyp3AJQZlaqvtQmQ.svg)](https://asciinema.org/a/Xyp3AJQZlaqvtQmQ)
### Сравнение с форматом "json"
[![asciicast](https://asciinema.org/a/xGUhNMGpmcAYZYm0.svg)](https://asciinema.org/a/xGUhNMGpmcAYZYm0)