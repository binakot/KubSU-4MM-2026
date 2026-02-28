# KubSU-4MM-2026

`Hello, World!`

## Установка браузерного расширения

1. Откройте Google Chrome и перейдите в `chrome://extensions/`.
2. Включите **Режим разработчика**.
3. Нажмите **Загрузить распакованное расширение** и выберите папку `extension`.
4. Нажмите `Отладка страниц service worker` для просмотра логов и отладки расширения.

---

```bash
$ python3 -m venv .venv

# LINUX/MACOS
$ source .venv/bin/activate 
# WINDOWS
$ .venv\Scripts\activate

$ where python
$ where python3

$ python main.py
$ python3 main.py
```

```bash
$ pip install "fastapi[standard]"

$ pip freeze > requirements.txt
```

```bash
$ fastapi dev main.py

$ curl -X 'GET' \
  'http://127.0.0.1:8000/' \
  -H 'accept: application/json'

$ curl -X 'GET' \
  'http://127.0.0.1:8000/items/123?q=python' \
  -H 'accept: application/json'
```

```bash
$ pip install ruff
$ ruff check --verbose
$ ruff format --verbose
```

```bash
$ pip install pre-commit
$ pre-commit install
```
