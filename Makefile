##################################################
# 環境構築
##################################################

# jaインストール
install_jq:
ifeq ($(shell which jq),)
	brew install jq
endif

# vscodeの拡張機能をインストール
install_extensions: install_jq
	cat .vscode/extension.json | jq -r '.recommendations[]' | xargs -L 1 code --install-extension



##################################################
# local development
##################################################

# ローカルサーバ起動
up_dev:
	docker-compose -f docker-compose.yml up

# ローカルサーバ起動(ビルドあり)
build_up_dev:
	docker-compose -f docker-compose.yml up --build

# ローカルサーバ停止
down_dev:
	docker-compose -f docker-compose.yml down

# lint実行
lint:
	docker-compose -f docker-compose.yml run --rm npm run lint
