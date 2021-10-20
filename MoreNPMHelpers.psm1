function get-npmdependenciesjson {
<#
.Description
Parse and return package dependencies of $pkgName as a psobject
#>
param(
[parameter(Mandatory = $true)]
[string[]]
$pkgName
)
if (!($pkgName)) {
return Write-Error "Must pass `$pkgName parameter"
}
if ($pkgName.Count -eq 1) {
$local:deps = npm info $pkgName --json | convertfrom-json | foreach {$_.dependencies}
return $local:deps
} elseif ($pkgName.Count -gt 1) {
$local:pkgs = [System.Collections.ArrayList]::new()
$pkgName | ForEach-Object {
$local:pkgs.Add($_)
}
$local:deps = $local:pkgs | foreach-object {
npm info $_ --json | convertfrom-json | foreach-object {$_.dependencies}
}
return $local:deps
} else {
return write-error -Category NotImplemented "not Implemented"
}
}
