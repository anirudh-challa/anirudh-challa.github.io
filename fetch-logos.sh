#!/usr/bin/env bash
set -e
mkdir -p assets/logos
cd assets/logos || exit 1

# Define name-to-slug mapping manually
download_logo() {
  name="$1"
  slug="$name"
  case "$name" in
    pyspark) slug="apachespark" ;;
    aws) slug="amazonaws" ;;
    llms) slug="openai" ;;
    computer_vision) slug="opencv" ;;
    sql) slug="mysql" ;;
    bash) slug="gnu-bash" ;;
    cpp) slug="cplusplus" ;;
    d3) slug="d3dotjs" ;;
    airflow) slug="apacheairflow" ;;
  esac

  echo "Downloading $name → $slug ..."
  curl -fsSL "https://cdn.simpleicons.org/${slug}" -o "${name}.svg" || echo "⚠️ Failed: $name"
}

for n in python numpy keras pytorch spacy tensorflow seaborn matplotlib huggingface pyspark aws llms computer_vision nlp kubeflow git sql bash cpp d3 airflow
do
  download_logo "$n"
done

echo "✅ Logos downloaded to assets/logos/"

