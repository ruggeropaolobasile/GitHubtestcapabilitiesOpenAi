from dataclasses import dataclass


@dataclass
class CapabilityReport:
    repo_name: str
    initialized: bool
    capabilities: list[str]


DEFAULT_CAPABILITIES = [
    'read_repo',
    'search_code',
    'fetch_file',
    'compare_commits',
    'review_pull_request',
]


def build_report(repo_name: str, initialized: bool = True) -> CapabilityReport:
    return CapabilityReport(
        repo_name=repo_name,
        initialized=initialized,
        capabilities=DEFAULT_CAPABILITIES,
    )


def to_dict(report: CapabilityReport) -> dict:
    return {
        'repo_name': report.repo_name,
        'initialized': report.initialized,
        'capabilities': report.capabilities,
    }


if __name__ == '__main__':
    report = build_report('GitHubtestcapabilitiesOpenAi')
    print(to_dict(report))
