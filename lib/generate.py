import argparse
import os
import yaml
import logging

# Configure Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LABELS = {
    "en": {
        "table_header": "**Security** | **Priority** | **Details and Hints**",
        "software_header": "### Recommended Software",
        "priority_map": {},
    },
    "fa": {
        "table_header": "**اقدام امنیتی** | **اولویت** | **جزئیات و راهنما**",
        "software_header": "### نرم‌افزارهای پیشنهادی",
        "priority_map": {
            "Essential": "ضروری",
            "Optional": "اختیاری",
            "Advanced": "پیشرفته",
            "Basic": "پایه",
        },
    },
}


def read_yaml(file_path):
    logger.info(f"Reading YAML file from {file_path}...")
    with open(file_path, 'r') as file:
        return yaml.safe_load(file)

def generate_markdown_section(section, locale):
    markdown = f"## {section['title']}\n\n"
    markdown += f"{section['intro']}\n\n"
    labels = LABELS.get(locale, LABELS["en"])
    markdown += f"{labels['table_header']}\n"
    markdown += "--- | --- | ---\n"
    for item in section['checklist']:
        priority_label = labels["priority_map"].get(item['priority'], item['priority'])
        markdown += f"**{item['point']}** | {priority_label} | {item['details']}\n"
    
    if 'softwareLinks' in section:
        software_links = [software for software in section['softwareLinks'] if 'title' in software and 'url' in software]
        if software_links:
            markdown += f"\n{labels['software_header']}\n"
            for software in software_links:
                markdown += f"- [{software['title']}]({software['url']})\n"
    
    return markdown

def insert_markdown_content(md_file_path, new_content):
    start_marker, end_marker = "<!-- checklist-start -->", "<!-- checklist-end -->"
    logger.info(f"Inserting generated markdown into {md_file_path} between markers...")
    
    with open(md_file_path, 'r') as file:
        content = file.read()
    
    start_index = content.find(start_marker)
    end_index = content.find(end_marker, start_index)
    
    if start_index == -1 or end_index == -1:
        logger.error("Markers not found in the markdown file.")
        return
    
    updated_content = content[:start_index + len(start_marker)] + "\n" + new_content + "\n" + content[end_index:]
    
    with open(md_file_path, 'w') as file:
        file.write(updated_content)
    logger.info("Markdown content successfully inserted.")

def parse_args():
    parser = argparse.ArgumentParser(description="Generate CHECKLIST.md from YAML.")
    parser.add_argument("--input", default=os.path.join(project_root, 'personal-security-checklist.yml'))
    parser.add_argument("--output", default=os.path.join(project_root, 'CHECKLIST.md'))
    parser.add_argument("--locale", default="en")
    return parser.parse_args()


def main():
    args = parse_args()
    yaml_data = read_yaml(args.input)
    markdown_content = ""
    for section in yaml_data:
        markdown_content += generate_markdown_section(section, args.locale) + "\n\n"
    insert_markdown_content(args.output, markdown_content)
    logger.info("Script completed successfully!")

if __name__ == "__main__":
    main()
