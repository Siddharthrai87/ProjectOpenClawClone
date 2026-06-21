# Ask Mode

## Question

what is inside the /modes/agent explain me what is going on into proper example code

## Answer

To explore the contents of `/modes/agent`, you can use the `list_files` tool. Here's how it works:

### Proposed Example:
```bash
# Use this command to listing all files/directories recursively
list_files(path="/modes/agent", recursive=True)
```

### Explanation:
The output will show the hierarchical structure of files and subdirectories under `/modes/agent`. For example:
```
/modes/agent/human  
├── model.py  
├── config.json  
└── test/
    └── utils.py  
```
- `model.py` might contain code definitions.  
- `config.json` loads settings.  
- `utils.py` could solve user issues.  

This helps identify libraries, configurations, or custom logic embedded in the "agent" configuration. Adjust the `recursive` flag (default: `false`) as needed to explore ancestors/descendants.
