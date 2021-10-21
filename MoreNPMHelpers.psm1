# More Utility functions for NPM and others
# Author: Carl Capodice
Set-StrictMode -Version 1

function get-npmdependenciesjson {
    <#
.Description
Parse and return package dependencies of $pkgName as a psobject
.NOTES
If there are no dependencies in the npm package (eg. Lodash), the script will output _nothing_.
.PARAMETER pkgName
The name of the package you want to query
.PARAMETER pkgNameArray
An array of pkg names to parse and query npm for
.PARAMETER extraInfo
A switch that allows this script to output a different set of properties from the received json object
.EXAMPLE
$result = get-npmdependenciesjson -pkgName "npm" -extraInfo
Attaches result to the $result variable
#>
    [cmdletbinding()]
    param(
        [string]
        $pkgName,
        [string[]]
        $pkgNameArray,
        [switch]
        $extraInfo
    )
    if ($extraInfo) {
        # This logs only the specified properties to the console.
        $local:pkginfo = npm info $pkgName --json | convertfrom-json | select-object -Property "name", "description", "dependencies", "repository", "main"
        return $local:pkginfo
    }
    if (!($pkgName) -and (!($pkgNameArray))) {
        return Write-Error "Must pass `$pkgName or `$pkgNameArray parameter"
    }

    if ($pkgName) {
        $local:deps = npm info $pkgName --json | convertfrom-json | Select-object -ExpandProperty dependencies | out-host
        return $local:deps
    }
    elseif ($pkgNameArray) {
        $local:pkgs = [System.Collections.ArrayList]::new()
        # Add each package name to $pkgs ArrayList
        $pkgNameArray | ForEach-Object {
            $local:pkgs.Add($_)
        }
        # Iterate thru $pkgs and add to $local:deps var.
        $local:deps = $local:pkgs | foreach-object {
            npm info $_ --json | convertfrom-json | foreach-object { $_.dependencies }
        }
        return $local:deps
    }
    else {
        return write-error -Category NotImplemented "not Implemented or something went wrong"
    }
}
