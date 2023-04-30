install_jq:

ifeq ($(shell which jq),)
	brew install jq
endif

install_extensions: install_jq
	cat .vscode/extension.json | jq -r '.recommendations[]' | xargs -L 1 code --install-extension
