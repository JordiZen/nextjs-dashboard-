#!/bin/bash

echo "🔄 Fent git add ."
git add .

echo "✏️ Escriu el missatge de commit:"
read msg

echo "✅ Fent commit amb missatge: $msg"
git commit -m "$msg"

echo "🚀 Fent push a origin..."
git push

echo "✅ Push fet. Revisa Vercel!"
