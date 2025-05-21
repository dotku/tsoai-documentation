# RAG 检索增强生成

## OCR 处理

* PaddleOCR
* Tesseract

## 数据工具

* MongoDB
* Elasticsearch
* Neo4j 图数据，比如组织结构数据
* FAISS（本地，轻量级）
* Milvus（企业级，支持大规模）
* Weaviate / Pinecone（托管版，易集成）
* ClickHouse、DuckDB

## 数据处理工具

| 工具/库                        | 用途             |
| --------------------------- | -------------- |
| **pandas**                  | 表格读取与处理        |
| **openpyxl / xlrd**         | Excel 格式读取     |
| **camelot / tabula**        | 从 PDF 表格提取     |
| **langchain / llama-index** | 构建 RAG 检索与问答   |
| **GPT-4 / Claude**          | 智能解释或提取非标准表格含义 |

## 数据向量补充处理

将表格每一行或每个字段转换为可读文本块（如“客户张三在2023年3月购买了价值500元的产品”），然后进行 embedding，存入向量数据库，供检索用

## 案例

![image](https://github.com/user-attachments/assets/3b0713d4-0985-44b9-8485-198ab56ef661)

```json
{
  "清单": "经济",
  "场景": "无线网",
  "类型": "16口POE交换机",
  "BOM编码": "9801A5M3",
  "产品选型": "US218-HP",
  "产品备注": "",
  "是否预停产": false
}
```


