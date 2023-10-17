import os

project_dir = "C:/Users/Joey/Desktop/projecthub/TDFileExplorer/src"

for project in os.listdir(project_dir):
    if (os.path.isdir(project_dir + "\\" + project)):
        print(project)
        for file in os.listdir(project_dir + "\\" + project):
            print("\t" + file)
