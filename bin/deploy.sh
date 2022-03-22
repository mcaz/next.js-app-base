# #!/bin/bash

# # next exportの実行
# npm run export

# # 趣旨と関係ないけど、これら消さずにS3に上げるとブラウザからダウンロードできちゃうので消す
# find ./out -name ".DS_Store" | xargs rm
# find ./out -name ".keep" | xargs rm

# # .html なファイルから拡張子を取り除く
# html_filepaths=$(find ./out -name "*.html")
# for filepath in $html_filepaths; do
#   echo $filepath
#   mv $filepath ${filepath%\.html}
# done

# # S3にsync（アップロード）
# bucket_name=***************
# aws s3 sync ./out/ s3://$bucket_name/ --delete

# # Content-Type付与する
# for filepath in $html_filepaths; do
#   path=${filepath#\.\/out\/}
#   key=${path%\.html}

#   aws s3api copy-object \
#     --bucket $bucket_name \
#     --copy-source $bucket_name/$key \
#     --key $key \
#     --metadata-directive "REPLACE" \
#     --content-type "text/html"
# done
